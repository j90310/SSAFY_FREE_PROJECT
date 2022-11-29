package com.ssafy.royale.domain.user.api;

import com.ssafy.royale.domain.user.domain.User;
import com.ssafy.royale.domain.user.dto.*;
import com.ssafy.royale.domain.user.service.UserService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login.do")
    @ApiOperation(value = "로그인", notes = "<strong>이메일과 패스워드</strong>를 통해 로그인 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "로그인 실패"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> login(@RequestBody @ApiParam(value = "로그인 정보", required = true) UserLoginRequestDto loginInfo) {
        String userEmail = loginInfo.getUserEmail();
        String userPassword = loginInfo.getUserPassword();
        System.out.println(userEmail + " " + userPassword);

        HttpHeaders headers = new HttpHeaders();

        User user = userService.findUserByUserEmail(userEmail);
        // 로그인 요청한 유저로부터 입력된 패스워드 와 디비에 저장된 유저의 암호화된 패스워드가 같은지 확인.(유효한 패스워드인지 여부 확인)
        if (passwordEncoder.matches(userPassword, user.getUserPassword())) {
            // jwt 토큰 생성해서 넘겨주기
            TokenDto tokenDto = userService.doLogin(loginInfo);

            headers.add("Auth", tokenDto.getAccessToken());
            headers.add("Refresh", tokenDto.getRefreshToken());

//            return new ResponseEntity<>(tokenDto, headers, HttpStatus.OK);
            return ResponseEntity.status(200).headers(headers).body(UserLoginResponseDto.of(tokenDto, user));
        }
        // 유효하지 않는 패스워드인 경우, 로그인 실패로 응답.
        return ResponseEntity.status(401).body(null);
    }

    @GetMapping("/email-check.do/{userEmail}")
    @ApiOperation(value = "이메일 중복체크", notes = "이메일이 중복인지 확인한다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "이메일 중복"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> emailCheck(@PathVariable(value = "userEmail") @ApiParam(value = "이메일", required = true) String userEmail) {
        if (userService.emailCheck(userEmail)) {
            return ResponseEntity.status(400).body(false);
        }
        return ResponseEntity.status(200).body(true);
    }

    @PostMapping("/register.do")
    @ApiOperation(value = "회원 가입", notes = "<strong>이메일, 패스워드, 이름, 전화번호</strong>를 통해 회원가입 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> register(
            @RequestBody @ApiParam(value = "회원가입 정보", required = true) UserCreateRequestDto userCreateRequestDto) {
        // 빈 칸이 있으면
        if (userCreateRequestDto.getUserName().equals("") || userCreateRequestDto.getUserPassword().equals("") ||
                userCreateRequestDto.getUserPhone().equals("") || userCreateRequestDto.getUserEmail().equals("")) {
            return ResponseEntity.status(400).body("빈칸이 있습니다. 칸을 전부 채워주세요.");
        }

        try {
            User user = userService.createUser(userCreateRequestDto);
            return ResponseEntity.status(200).body("회원가입 성공");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("회원가입 실패");
        }
    }

    @GetMapping("/{userSeq}")
    @ApiOperation(value = "회원 정보 조회", notes = "회원 번호로 정보 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> select(
            @PathVariable(value = "userSeq") @ApiParam(value = "회원 번호", required = true) Long userSeq) {
        // 유저 정보 없으면
        if (userService.findUserByUserSeq(userSeq) == null) {
            return ResponseEntity.status(400).body("회원 정보가 없습니다.");
        }
        User user = userService.findUserByUserSeq(userSeq);
        return ResponseEntity.status(200).body(user);
    }

    @PatchMapping("/remove/{userSeq}")
    @ApiOperation(value = "회원 탈퇴", notes = "회원 번호로 개인정보 디폴드 값 변경")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> delete(
            @PathVariable(value = "userSeq") @ApiParam(value = "회원 번호", required = true) Long userSeq) {

        // 유저 정보 없으면
        if (userService.findUserByUserSeq(userSeq) == null) {
            return ResponseEntity.status(400).body("회원 정보가 없습니다.");
        }
        String result = userService.removeUser(userSeq);
        return ResponseEntity.status(200).body(result);
    }

    @PatchMapping()
    @ApiOperation(value = "회원 수정", notes = "회원 정보 수정")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> update(
            @RequestBody @ApiParam(value = "회원 정보", required = true) UserUpdateRequestDto userUpdateRequestDto) {

        // 유저 정보 없으면
        if (userService.findUserByUserSeq(userUpdateRequestDto.getUserSeq()) == null) {
            return ResponseEntity.status(400).body("회원 정보가 없습니다.");
        }

        User user = userService.updateUser(userUpdateRequestDto);
        return ResponseEntity.status(200).body(user);
    }

    @PostMapping("/refresh.do")
    @ApiOperation(value = "Access Token 재발급")
    public ResponseEntity<TokenDto> refresh(@RequestBody TokenRequestDto requestDto){
        return ResponseEntity.status(200).body(userService.refresh(requestDto));
    }

}
