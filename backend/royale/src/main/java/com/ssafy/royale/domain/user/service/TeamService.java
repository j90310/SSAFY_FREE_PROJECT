package com.ssafy.royale.domain.user.service;


import com.ssafy.royale.domain.user.dao.AssociationRepository;
import com.ssafy.royale.domain.user.dao.TeamRepository;
import com.ssafy.royale.domain.user.domain.Apply;
import com.ssafy.royale.domain.user.domain.Association;
import com.ssafy.royale.domain.user.domain.Team;
import com.ssafy.royale.domain.user.dto.ApplyResponseDto;
import com.ssafy.royale.domain.user.dto.SearchTeamResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Slf4j
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;
    private final AssociationRepository associationRepository;

    public List<SearchTeamResponseDto> getTeamList(String teamName) {
        List<Team> teams = teamRepository.findByTeamNameContains(teamName);

        List<SearchTeamResponseDto> result = new ArrayList<>();
        for ( Team team: teams ) {
            Association association = associationRepository.findByAssociationSeq(team.getAssociation().getAssociationSeq()).get();

            SearchTeamResponseDto searchTeamResponseDto = SearchTeamResponseDto.builder()
                    .teamSeq(team.getTeamSeq())
                    .teamName(team.getTeamName())
                    .associationName(association.getAssociationName())
                    .build();

            result.add(searchTeamResponseDto);
        }

        return result;
    }
}
