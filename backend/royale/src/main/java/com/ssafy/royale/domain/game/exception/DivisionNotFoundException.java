package com.ssafy.royale.domain.game.exception;

import com.ssafy.royale.global.error.exception.CustomException;
import com.ssafy.royale.global.error.exception.ErrorCode;

public class DivisionNotFoundException extends CustomException {
    public DivisionNotFoundException(){super(ErrorCode.DIVISION_NOT_FOUND);};
}
