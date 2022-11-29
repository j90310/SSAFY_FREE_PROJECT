package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.domain.GameLog;
import com.ssafy.royale.domain.game.dto.GameLogUpdateRequestDto;

public interface GameLogService {

    boolean init(Long gameSeq);

    GameLog update(GameLogUpdateRequestDto gameLogUpdateRequestDto);

    GameLog select(Long gameSeq);
}
