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
        return userSeq + "??? ????????? ??????????????? ??????????????????.";
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
        // Login id/pw??? AuthenticationToken ??????
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userLoginRequestDto.getUserEmail(), userLoginRequestDto.getUserPassword());
        // ?????? ??????
        // CustomUserDetailsService??? loadByUserName ??????
        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // ?????? ????????? ???????????? JWT ?????? ??????
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        //Refresh Token ??????
        Optional<User> user = userRepository.findByUserEmail(authentication.getName());

        // user???????????? user??? ????????? ??????
        if(user.isPresent()){
            user.get().saveToken(tokenDto.getRefreshToken());
            userRepository.save(user.get());
        }

        return tokenDto;
    }

    @Override
    public TokenDto refresh(TokenRequestDto requestDto){
        // Refresh Token ??????
        if(!tokenProvider.validateToken(requestDto.getRefreshToken())){
            throw new RuntimeException("Refresh Token??? ???????????? ????????????.");
        }

        // Access Token?????? Id(Email) ????????????
        Authentication authentication = tokenProvider.getAuthentication(requestDto.getAccessToken());

        // ????????? ID??? Refresh Token ????????????
        User user = userRepository.findByUserEmail(authentication.getName())
                .orElseThrow(()->new RuntimeException("??????????????? ??????????????????."));

        String refreshToken = user.getUserToken();

        // ?????? ??????
        if(!refreshToken.equals(requestDto.getRefreshToken())){
            throw new RuntimeException("????????? ?????? ????????? ???????????? ????????????.");
        }

        // ??? ?????? ??????
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // DB ?????? ????????????
        user.saveToken(tokenDto.getRefreshToken());

        // ?????? ??????
        return tokenDto;
    }
}
