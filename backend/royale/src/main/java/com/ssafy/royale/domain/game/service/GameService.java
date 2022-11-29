package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.dto.GameResponseDto;
import com.ssafy.royale.domain.game.dto.GameScoreRequestDto;
import com.ssafy.royale.domain.game.dto.LastGameDto;
import com.ssafy.royale.domain.game.dto.TournamentResponseDto;

import java.util.List;

public interface GameService {
    Boolean autoMakeGame(Long seq);
    List<TournamentResponseDto> getTournament(Long leagueSeq, Long divisionSeq);
    Game insertCurrentGameScore(GameScoreRequestDto dto);
    GameResponseDto getGameInfo(Long gameSeq);
    List<LastGameDto> getLastGame(Long leagueSeq);
}
