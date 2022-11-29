package com.ssafy.royale.domain.user.exception;


import com.ssafy.royale.global.error.exception.CustomException;
import com.ssafy.royale.global.error.exception.ErrorCode;

public class TokenNotFoundException extends CustomException {
    public TokenNotFoundException() {
        super(ErrorCode.TOKEN_NOT_FOUND);
    }
}
