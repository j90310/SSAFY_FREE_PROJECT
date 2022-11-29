package com.ssafy.royale.global.error.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    INVALID_PARAMETER(400, "I003", "잘못된 요청입니다."),
    MEMBER_NOT_FOUND(404, "U001", "회원 정보를 찾을 수 없습니다."),
    DUPLICATE_EMAIL(400, "U002", "이미 존재하는 계정입니다."),
    TOKEN_NOT_FOUND(400, "U003", "해당하는 토큰을 찾을 수 없습니다."),

    LEAGUE_NOT_FOUND(404, "L001", "해당하는 대회를 찾을 수 없습니다."),
    DIVISION_NOT_FOUND(404, "D001", "해당하는 Division을 찾을 수 없습니다."),
    GAME_NOT_FOUND(404, "G001", "해당하는 경기를 찾을 수 없습니다.");


    private final int status;
    private final String code;
    private final String message;

}
