package com.ssafy.royale.domain.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserLoginRequestDto")
public class UserLoginRequestDto {
    @ApiModelProperty(name="유저 이메일", example="kimssafy@ssafy.com")
    String userEmail;

    @ApiModelProperty(name="유저 비밀번호", example="1234")
    String userPassword;
}
