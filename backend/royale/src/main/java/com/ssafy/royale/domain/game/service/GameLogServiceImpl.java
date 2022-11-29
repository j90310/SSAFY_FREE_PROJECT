package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.dao.GameLogRepository;
import com.ssafy.royale.domain.game.dao.GameRepository;
import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.domain.GameLog;
import com.ssafy.royale.domain.game.dto.GameLogUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GameLogServiceImpl implements GameLogService {

    @Autowired
    GameRepository gameRepository;

    @Autowired
    GameLogRepository gameLogRepository;

    @Override
    public boolean init(Long gameSeq) {

        // 해당 경기가 없으면 false 리턴
        if (!gameRepository.findById(gameSeq).isPresent())
            return false;

        // 해당 경기가 있으면 로그 생성
        GameLog gameLog = GameLog.builder()
                .game(gameRepository.findById(gameSeq).get())
                .score1(0)
                .score2(0)
                .advantage1(0)
                .advantage2(0)
                .penalty1(0)
                .penalty2(0)
                .dq((long)(-1))
                .sub((long)(-1))
                .build();
        gameLogRepository.save(gameLog);
        return true;
    }

    @Override
    public GameLog update(GameLogUpdateRequestDto gameLogUpdateRequestDto) {
        Game game = gameRepository.findById(gameLogUpdateRequestDto.getGameSeq()).get();
        GameLog gameLog = gameLogRepository.findGameLogByGame(game);
        gameLog.updateGameLog(gameLogUpdateRequestDto);
        return gameLogRepository.save(gameLog);
    }

    @Override
    public GameLog select(Long gameSeq) {
        // 해당 경기가 없으면
        if (!gameRepository.findById(gameSeq).isPresent())
            return null;

        Game game = gameRepository.findById(gameSeq).get();
        return gameLogRepository.findGameLogByGame(game);
    }
}
