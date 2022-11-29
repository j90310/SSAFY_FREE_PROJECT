package com.ssafy.royale.domain.game.dao;

import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.domain.GameLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameLogRepository extends JpaRepository<GameLog, Long> {
    GameLog findGameLogByGame(Game game);
}
