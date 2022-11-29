package com.ssafy.royale.domain.game.dto;

import com.ssafy.royale.domain.game.domain.Game;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@ApiModel(value = "GameResponseDto", description = "한 경기에 대한 응답")
@Builder
@ToString
@Getter
public class GameResponseDto {
    private String player1Name;
    private String player2Name;
    private String player1Team;
    private String player2Team;
    private Long player1Seq;
    private Long player2Seq;
    private Game game;

}
