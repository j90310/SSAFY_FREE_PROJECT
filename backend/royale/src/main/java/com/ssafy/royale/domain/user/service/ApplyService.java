package com.ssafy.royale.domain.user.service;

import com.ssafy.royale.domain.game.dao.DivisionRepository;
import com.ssafy.royale.domain.league.dao.LeagueRepository;
import com.ssafy.royale.domain.user.dao.ApplyRepository;
import com.ssafy.royale.domain.user.dao.TeamRepository;
import com.ssafy.royale.domain.user.dao.UserRepository;
import com.ssafy.royale.domain.user.domain.Apply;
import com.ssafy.royale.domain.user.domain.User;
import com.ssafy.royale.domain.user.dto.ApplyResponseDto;
import com.ssafy.royale.domain.user.dto.CreateApplyRequestDto;
import com.ssafy.royale.domain.user.exception.MemberNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class ApplyService {
    private final ApplyRepository applyRepository;
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final LeagueRepository leagueRepository;
    private final DivisionRepository divisionRepository;



    public List<ApplyResponseDto> getApplyList(String name){
        List<User> users = userRepository.findAllByUserName(name);
        List<ApplyResponseDto> result = new ArrayList<>();
        Set<String> duplicateCheck = new HashSet<>();
        for (User user: users) {
            for (Apply apply: user.getApplies()) {
                if(duplicateCheck.add(user.getUserPhone())){
                    ApplyResponseDto responseDto = ApplyResponseDto.builder()
                            .applySeq(apply.getApplySeq())
                            .userSeq(user.getUserSeq())
                            .name(user.getUserName())
                            .phoneNumber(user.getUserPhone())
                            .isBodyMeasurements(apply.isWeightCheck())
                            .build();
                    result.add(responseDto);
                }
            }
        }

        return result;
    }

    public void weightCheck(Long userSeq){
        User user = userRepository.findById(userSeq).orElseThrow(MemberNotFoundException::new);
        List<Apply> applies = applyRepository.findAllByUser(user);

        for (Apply apply: applies) {
            apply.changeWeightCheck();
            applyRepository.save(apply);
        }
    }

    public Apply createApply(CreateApplyRequestDto createApplyRequestDto) {

        Apply apply = Apply.builder()
                .user(userRepository.findByUserSeq(createApplyRequestDto.getUserSeq()).get())
                .team(teamRepository.findByTeamSeq(createApplyRequestDto.getTeamSeq()).get())
                .league(leagueRepository.findByLeagueSeq(createApplyRequestDto.getLeagueSeq()).get())
                .division(divisionRepository.findByDivisionSeq(createApplyRequestDto.getDivisionSeq()).get())
                .build();
        applyRepository.save(apply);
        return apply;
    }
}
