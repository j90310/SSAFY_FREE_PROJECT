package com.ssafy.royale.domain.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserCreateRequestDto")
public class UserCreateRequestDto {
    @ApiModelProperty(name="유저 이메일", example="kimssafy@ssafy.com")
    String userEmail;

    @ApiModelProperty(name="유저 비밀번호", example="1234")
    String userPassword;

    @ApiModelProperty(name="유저 이름", example="김싸피")
    String userName;

    @ApiModelProperty(name="유저 전화번호", example="010-0000-0000")
    String userPhone;
}
