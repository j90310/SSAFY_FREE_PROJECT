package com.ssafy.royale.domain.league.service;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.dto.CreateLeagueRequestDto;
import com.ssafy.royale.domain.league.dto.UpdateLeagueRequestDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface LeagueService {
    League createLeague(CreateLeagueRequestDto createLeagueRequestDto);

    String updateLeaguePoster(Long leagueSeq, MultipartFile poster) throws IOException;

    League findLeagueByLeagueSeq(Long leagueSeq);

    League updateLeague(UpdateLeagueRequestDto updateLeagueRequestDto);

    void deleteLeague(League league);

    Boolean closeLeague(long leagueSeq);


}
