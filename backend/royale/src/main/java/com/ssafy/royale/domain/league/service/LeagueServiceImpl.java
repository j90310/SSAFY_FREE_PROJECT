package com.ssafy.royale.domain.league.service;

import com.ssafy.royale.domain.league.dao.LeagueRepository;
import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.dto.CreateLeagueRequestDto;
import com.ssafy.royale.domain.league.dto.UpdateLeagueRequestDto;
import com.ssafy.royale.global.util.S3Uploader;
import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service("leagueService")
@RequiredArgsConstructor
@Transactional
public class LeagueServiceImpl implements LeagueService{

    @Autowired
    S3Uploader s3Uploader;

    @Autowired
    LeagueRepository leagueRepository;

    /**
     * 대회 생성
     */
    @Override
    public League createLeague(CreateLeagueRequestDto createLeagueRequestDto) {

        League league = League.builder()
                .leagueName(createLeagueRequestDto.getLeagueName())
                .leaguePlace(createLeagueRequestDto.getLeaguePlace())
                .leagueDate(createLeagueRequestDto.getLeagueDate())
                .leagueDeadline(createLeagueRequestDto.getLeagueDeadline())
                .leagueInfo(createLeagueRequestDto.getLeagueInfo())
                .leagueClose(false)
                .build();

        return leagueRepository.save(league);
    }

    @Override
    public String updateLeaguePoster(Long leagueSeq, MultipartFile poster) throws IOException {

        System.out.println("leagueSeq >>> " + leagueSeq);
        System.out.println("MultipartFile >>> " + poster);

        // S3에 저장
        String posterURL = s3Uploader.upload(poster, "leaguePoster");

        // DB에 저장
        League updateLeague = leagueRepository.findById(leagueSeq).get();
        updateLeague.setLeaguePoster(posterURL);

        return posterURL;
    }

    /**
     * 대회 조회(leagueSeq로 검색)
     */
    @Override
    public League findLeagueByLeagueSeq(Long leagueSeq) {
        return leagueRepository.findById(leagueSeq).get();
    }

    /**
     * 대회 정보 수정
     */
    @Override
    public League updateLeague(UpdateLeagueRequestDto updateLeagueRequestDto) {
        // 리그 정보 가져오기
        League updateLeague = leagueRepository.findById(updateLeagueRequestDto.getLeagueSeq()).get();

        // 리그 정보 수정
        updateLeague.updateLeague(
                updateLeagueRequestDto.getLeagueName(), updateLeagueRequestDto.getLeaguePlace(),
                updateLeagueRequestDto.getLeagueDate(), updateLeagueRequestDto.getLeagueDeadline(),
                updateLeagueRequestDto.getLeaguePoster(), updateLeagueRequestDto.getLeagueInfo());

        return leagueRepository.save(updateLeague);
    }

    /**
     * 대회 정보 삭제
     */
    @Override
    public void deleteLeague(League league) {
        leagueRepository.delete(league);
    }

    /**
     * 대회 신청 마감
     */
    @Override
    public Boolean closeLeague(long leagueSeq) {

        League updateLeague = leagueRepository.findByLeagueSeq(leagueSeq).get();
        updateLeague.setLeagueClose(true);

        leagueRepository.save(updateLeague);

        return updateLeague.getLeagueClose();
    }
}
