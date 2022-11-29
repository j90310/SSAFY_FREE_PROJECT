package com.ssafy.royale.domain.game.dto;

import com.ssafy.royale.domain.user.dto.ParticipantsDto;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.util.List;

@ApiModel(value = "GameResponseDto", description = "대진표")
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class TournamentResponseDto {
    @ApiModelProperty(name = "game_seq값")
    private Integer id;
    @ApiModelProperty(name = "mat_game_num값, 매트별 경기번호")
    private String name;
    @ApiModelProperty(name = "다음 game_seq값")
    private Integer nextMatchId;
    @ApiModelProperty(name = "토너먼트 경기 깊이, 1라운드 1, 2라운드 2...")
    private String tournamentRoundText;
    @ApiModelProperty(name = "경기 시작 시간 -> game_seq값을 넣어서 식별가능하게 변경")
    private String startTime;
    @ApiModelProperty(name = "경기 상태")
    private String state;
    @ApiModelProperty(name = "참가자 명단")
    private List<ParticipantsDto> participants;

    public static TournamentResponseDto from(){
        return null;
    }
}
