package com.ssafy.royale.domain.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserUpdateRequestDto")
public class UserUpdateRequestDto {
    @ApiModelProperty(name="유저 번호", example="1")
    Long userSeq;

    @ApiModelProperty(name="유저 비밀번호", example="1234")
    String userPassword;

    @ApiModelProperty(name="유저 이름", example="김싸피")
    String userName;

    @ApiModelProperty(name="유저 전화번호", example="010-0000-0000")
    String userPhone;
}
