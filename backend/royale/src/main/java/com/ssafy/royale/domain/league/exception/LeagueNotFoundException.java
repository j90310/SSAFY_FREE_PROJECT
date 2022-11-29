package com.ssafy.royale.domain.league.exception;

import com.ssafy.royale.global.error.exception.CustomException;
import com.ssafy.royale.global.error.exception.ErrorCode;

public class LeagueNotFoundException extends CustomException {

    public LeagueNotFoundException(){super(ErrorCode.LEAGUE_NOT_FOUND);};
}
