package com.ssafy.royale.domain.game.exception;

import com.ssafy.royale.global.error.exception.CustomException;
import com.ssafy.royale.global.error.exception.ErrorCode;

public class GameNotFoundException extends CustomException {
    public GameNotFoundException(){super(ErrorCode.GAME_NOT_FOUND);}
}
