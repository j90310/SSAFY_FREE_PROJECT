package com.ssafy.royale.domain.game.service;


import com.ssafy.royale.domain.game.dao.DivisionRepository;
import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.dto.DivisionRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DivisionServiceImpl implements DivisionService{

    @Autowired
    DivisionRepository divisionRepository;

    @Override
    public Division getDivisionSeq(DivisionRequestDto divisionRequestDto) {
        Division division = divisionRepository.findDivisionSeqByDivisionAgeAndDivisionBeltAndDivisionGenderAndDivisionTypeAndDivisionWeight(
                divisionRequestDto.getDivisionAge(), divisionRequestDto.getDivisionBelt(),
                divisionRequestDto.getDivisionGender(), divisionRequestDto.getDivisionType(),
                divisionRequestDto.getDivisionWeight()
        ).get();

        return division;
    }
}
