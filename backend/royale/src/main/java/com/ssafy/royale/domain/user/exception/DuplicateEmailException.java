package com.ssafy.royale.domain.user.exception;


import com.ssafy.royale.global.error.exception.CustomException;
import com.ssafy.royale.global.error.exception.ErrorCode;

public class DuplicateEmailException extends CustomException {

    public DuplicateEmailException(){
        super(ErrorCode.DUPLICATE_EMAIL);
    }
}
