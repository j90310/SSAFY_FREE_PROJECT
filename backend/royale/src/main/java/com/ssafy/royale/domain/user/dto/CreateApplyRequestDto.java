package com.ssafy.royale.domain.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("CreateApplyRequestDto")
public class CreateApplyRequestDto {

    @ApiModelProperty(name = "신청자 정보", example = "0")
    long userSeq;

    @ApiModelProperty(name = "팀 정보", example = "0")
    long teamSeq;

    @ApiModelProperty(name = "체급 정보", example = "0")
    long divisionSeq;

    @ApiModelProperty(name = "리그 정보", example = "0")
    long leagueSeq;
}

