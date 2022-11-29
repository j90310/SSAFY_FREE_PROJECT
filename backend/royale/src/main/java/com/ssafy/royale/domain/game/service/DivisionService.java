package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.dto.DivisionRequestDto;

public interface DivisionService {
    Division getDivisionSeq(DivisionRequestDto divisionRequestDto);
}
