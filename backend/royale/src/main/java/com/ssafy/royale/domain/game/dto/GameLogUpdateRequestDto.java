package com.ssafy.royale.domain.game.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("GameLogUpdateRequestDto")
public class GameLogUpdateRequestDto {
    @ApiModelProperty(name = "경기 번호", example = "1029")
    Long gameSeq;

    @ApiModelProperty(name = "참가자1 점수", example = "1")
    int score1;
    @ApiModelProperty(name = "대회 이름", example = "1")
    int score2;
    @ApiModelProperty(name = "대회 이름", example = "1")
    int advantage1;
    @ApiModelProperty(name = "대회 이름", example = "1")
    int advantage2;
    @ApiModelProperty(name = "대회 이름", example = "1")
    int penalty1;
    @ApiModelProperty(name = "대회 이름", example = "1")
    int penalty2;

    @ApiModelProperty(name = "대회 이름", example = "120")
    Long dq;
    @ApiModelProperty(name = "대회 이름", example = "121")
    Long sub;
}
