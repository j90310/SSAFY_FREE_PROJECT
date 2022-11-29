package com.ssafy.royale.domain.user.exception;


import com.ssafy.royale.global.error.exception.CustomException;
import com.ssafy.royale.global.error.exception.ErrorCode;

public class MemberNotFoundException extends CustomException {
    public MemberNotFoundException(){
        super(ErrorCode.MEMBER_NOT_FOUND);
    }
}
