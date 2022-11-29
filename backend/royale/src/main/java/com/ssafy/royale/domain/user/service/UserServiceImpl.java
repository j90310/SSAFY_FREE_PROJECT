package com.ssafy.royale.domain.user.service;

import com.ssafy.royale.domain.user.dao.UserRepository;
import com.ssafy.royale.domain.user.domain.User;
import com.ssafy.royale.domain.user.dto.*;
import com.ssafy.royale.global.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service("userService")
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean emailCheck(String userEmail) {
        if (userRepository.findByUserEmail(userEmail).isPresent()) {
            return false;
        }
        return true;
    }

    @Override
    public User createUser(UserCreateRequestDto userCreateReqestDto) {
        User user = User.builder()
                .userEmail(userCreateReqestDto.getUserEmail())
                .userPassword(passwordEncoder.encode(userCreateReqestDto.getUserPassword()))
                .userName(userCreateReqestDto.getUserName())
                .userPhone(userCreateReqestDto.getUserPhone())
                .build();
        return userRepository.save(user);
    }

    @Override
    public User updateUser(UserUpdateRequestDto userUpdateRequestDto) {
        User user = userRepository.findById(userUpdateRequestDto.getUserSeq()).get();
        user.updateUser(passwordEncoder.encode(passwordEncoder.encode(userUpdateRequestDto.getUserPassword())),
                userUpdateRequestDto.getUserName(),
                userUpdateRequestDto.getUserPhone());
        return userRepository.save(user);
    }

    @Override
    public String removeUser(Long userSeq) {
        User user = userRepository.findById(userSeq).get();
        user.deleteUser();
        userRepository.save(user);
        return userSeq + "번 회원의 개인정보를 삭제했습니다.";
    }

    @Override
    public User findUserByUserSeq(Long userSeq) {
        return userRepository.findById(userSeq).get();
    }

    @Override
    public User findUserByUserEmail(String userEmail) {
        return userRepository.findByUserEmail(userEmail).get();
    }

    @Override
    public TokenDto doLogin(UserLoginRequestDto userLoginRequestDto) {
        // Login id/pw로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userLoginRequestDto.getUserEmail(), userLoginRequestDto.getUserPassword());
        // 검증 과정
        // CustomUserDetailsService의 loadByUserName 실행
        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        //Refresh Token 저장
        Optional<User> user = userRepository.findByUserEmail(authentication.getName());

        // user존재하면 user에 토큰값 저장
        if(user.isPresent()){
            user.get().saveToken(tokenDto.getRefreshToken());
            userRepository.save(user.get());
        }

        return tokenDto;
    }

    @Override
    public TokenDto refresh(TokenRequestDto requestDto){
        // Refresh Token 검증
        if(!tokenProvider.validateToken(requestDto.getRefreshToken())){
            throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
        }

        // Access Token에서 Id(Email) 가져오기
        Authentication authentication = tokenProvider.getAuthentication(requestDto.getAccessToken());

        // 가져온 ID로 Refresh Token 가져오기
        User user = userRepository.findByUserEmail(authentication.getName())
                .orElseThrow(()->new RuntimeException("로그아웃된 사용자입니다."));

        String refreshToken = user.getUserToken();

        // 일치 검사
        if(!refreshToken.equals(requestDto.getRefreshToken())){
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // 새 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // DB 정보 업데이트
        user.saveToken(tokenDto.getRefreshToken());

        // 토큰 발급
        return tokenDto;
    }
}
