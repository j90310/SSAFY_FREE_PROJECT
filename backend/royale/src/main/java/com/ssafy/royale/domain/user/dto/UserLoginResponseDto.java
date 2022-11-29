package com.ssafy.royale.domain.user.dto;

import com.ssafy.royale.domain.user.domain.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserLoginResponseDto")
public class UserLoginResponseDto {

    @ApiModelProperty(name="JWT 인증 토큰", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN...")
    TokenDto tokenDto;

    @ApiModelProperty(name="유저 번호")
    Long userSeq;
    @ApiModelProperty(name="유저 이메일")
    String userEmail;
    @ApiModelProperty(name="유저 이름")
    String userName;
    @ApiModelProperty(name="유저 전화번호")
    String userPhone;
    @ApiModelProperty(name="유저 인증")
    String userRole;

    public static UserLoginResponseDto of(TokenDto tokenDto, User user) {
        UserLoginResponseDto res = new UserLoginResponseDto();
        res.setTokenDto(tokenDto);
//        res.setUser(user);
        res.setUserSeq(user.getUserSeq());
        res.setUserEmail(user.getUserEmail());
        res.setUserName(user.getUserName());
        res.setUserPhone(user.getUserPhone());
        res.setUserRole(user.getUserRole());
        return res;
    }

}
