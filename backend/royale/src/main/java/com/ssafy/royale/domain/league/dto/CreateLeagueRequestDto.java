package com.ssafy.royale.domain.league.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ApiModel("CreateLeagueRequestDto")
public class CreateLeagueRequestDto {

    @ApiModelProperty(name = "대회 이름", example = "Royale 0")
    String leagueName;

    @ApiModelProperty(name = "대회 장소", example = "Busan Bexco")
    String leaguePlace;

    @ApiModelProperty(name = "대회 날짜", example = "2022-11-05")
    LocalDate leagueDate;

    @ApiModelProperty(name = "대회 신청 마감일", example = "2022-11-03T23:59:59.999")
    LocalDateTime leagueDeadline;

//    @ApiModelProperty(name = "대회 포스터", example = "https://s3.region-code.amazonaws.com/bucket-name/key-name" ) //가상 호스팅 방식 액세스?, 경로 방식 엑세스?
//    String leaguePoster;

    @ApiModelProperty(name = "대회 정보", example = "대회 정보, 상금 정보 ...")
    String leagueInfo;
}
