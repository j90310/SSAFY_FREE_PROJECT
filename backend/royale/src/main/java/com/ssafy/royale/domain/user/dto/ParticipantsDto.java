package com.ssafy.royale.domain.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@ApiModel(value = "participantsDto", description = "대진표안에 참가자")
public class ParticipantsDto {
    @ApiModelProperty(name = "회원 seq")
    private String id;
    @ApiModelProperty(name = "점수 or 판정승", example = "3 | SUB | DQ")
    private String resultText;
    @ApiModelProperty(name = "승 여부")
    private boolean isWinner;
    @ApiModelProperty(name = "선수 참여 여부", example = "NO_SHOW | null")
    private String status;
    @ApiModelProperty(name = "선수 이름")
    private String name;
}
