package com.ssafy.royale.domain.game.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameScoreRequestDto {
    @NotNull
    private Long gameSeq;
    @NotNull
    private String player1Score;
    @NotNull
    private String player2Score;
    @NotNull
    private Long gameWinner;
}
