package com.ssafy.royale.domain.league.api;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.dto.CreateLeagueRequestDto;
import com.ssafy.royale.domain.league.dto.UpdateLeagueRequestDto;
import com.ssafy.royale.domain.league.service.LeagueService;
import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Api(value = "대회 API", tags = {"League"})
@RestController
@RequestMapping(value = "api/leagues", produces="application/json;charset=UTF-8")
@CrossOrigin
public class LeagueController {

    @Autowired
    LeagueService leagueService;

    @PostMapping
    @ApiOperation(value = "대회 등록")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 405, message = "입력 오류"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> createLeague(
            @RequestBody
            @ApiParam(value = "대회 등록 정보", required = true) CreateLeagueRequestDto createLeagueRequestDto ) {
        /**
         * 권한 확인 필요!!
         */
        // 모든 정보가 입력되지 않은 경우
        if (createLeagueRequestDto.getLeagueName().equals("") || createLeagueRequestDto.getLeaguePlace().equals("")
                || createLeagueRequestDto.getLeagueDate().equals("") || createLeagueRequestDto.getLeagueDeadline().equals("")
                || createLeagueRequestDto.getLeagueInfo().equals("") ) {
            return ResponseEntity.status(405).body("모든 내용을 입력해주세요");
        }

        System.out.println(createLeagueRequestDto.getLeagueName());

        try {
            League league = leagueService.createLeague(createLeagueRequestDto);

            return ResponseEntity.status(200).body(league);
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 등록에 문제가 발생하였습니다.");
        }
    }

    @PostMapping("/updatePoster/{leagueSeq}")
    @ApiOperation(value = "대회 포스터 등록", notes = "S3와 DB에 대회 포스터 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "사진 리스트 없음"),
            @ApiResponse(code = 404, message = "게임방 정보 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> tempUpload(@PathVariable @ApiParam(value = "리그 코드", required = true) String leagueSeq,
                                        @RequestPart @ApiParam(value = "대회 포스터", required = true) MultipartFile poster) throws IOException {
        try {
            League league = leagueService.findLeagueByLeagueSeq(Long.parseLong(leagueSeq));
//            String date = league.getLeagueDate().toString();

            leagueService.updateLeaguePoster(Long.parseLong(leagueSeq), poster);
//            photoService.saveTempPhoto(photo, date, roomSeq);
//            String[] dateSplit = date.split(" ")[0].split("/");
//            String dirDate = dateSplit[2] + "년" + dateSplit[0] + "월" + dateSplit[1] + "일";
//            return "사진을 S3의 /temp/" + roomSeq + "-" + dirDate + " 폴더에 저장하였습니다.";
            return ResponseEntity.status(200).body(league);
        } catch (Exception e) {
            return ResponseEntity.status(400).body("사진 저장에 문제가 발생하였습니다.");
        }
    }

    /**
     * 페이지별 대회 정보 리스트 가져오기
     */
    @GetMapping("/pages/{page}")
    @ApiOperation(value = "페이지별 대회 조회", notes = "leagueSeq를 통해 대회 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 404, message = "대회 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> getLeagueList(
            @PathVariable(value = "page")
            @ApiParam(value = "대회 정보 검색", required = true) Long page) {

        try {
            List<League> leagues = new ArrayList<>();
            long idx = (6*page)-5;
            for (int i = 0; i < 6; i++) {
                League input = leagueService.findLeagueByLeagueSeq(Long.valueOf(idx));
                leagues.add(input);
                idx++;
            }
            return ResponseEntity.status(200).body(leagues);
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 정보를 가져올 수 없습니다.");
        }
    }

    @GetMapping("/{leagueSeq}")
    @ApiOperation(value = "대회 조회", notes = "leagueSeq를 통해 대회 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 404, message = "대회 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> readLeague(
            @PathVariable(value = "leagueSeq")
            @ApiParam(value = "대회 정보 검색", required = true) Long leagueSeq) {
        // 등록된 대회가 없을 경우
        if ( leagueService.findLeagueByLeagueSeq(leagueSeq) == null ) {
            return ResponseEntity.status(404).body("등록된 대회가 없습니다.");
        }

        try {
            League league = leagueService.findLeagueByLeagueSeq(leagueSeq);
            return ResponseEntity.status(200).body(league);
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 조회 실패");
        }
    }

    @PatchMapping
    @ApiOperation(value = "대회 수정", notes = "대회 정보 수정")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 404, message = "대회 없음"),
            @ApiResponse(code = 405, message = "입력 오류"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> updateLeague(
            @RequestBody
            @ApiParam(value = "대회 정보 수정", required = true) UpdateLeagueRequestDto updateLeagueRequestDto ) {
        /**
         * 권한 확인 필요!!
         */

        System.out.println(updateLeagueRequestDto);

        // 모든 정보가 입력되지 않은 경우
//        if (updateLeagueRequestDto.getLeagueName().equals("") || updateLeagueRequestDto.getLeaguePlace().equals("")
//                || updateLeagueRequestDto.getLeagueDate().equals("") || updateLeagueRequestDto.getLeagueDeadline().equals("")
//                || updateLeagueRequestDto.getLeaguePoster().equals("") || updateLeagueRequestDto.getLeagueInfo().equals("") ) {
//            return ResponseEntity.status(405).body("모든 내용을 입력해주세요");
//        }

        try {
            League league = leagueService.updateLeague(updateLeagueRequestDto);
            return ResponseEntity.status(200).body(league);
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 정보 수정 실패");
        }
    }

    @DeleteMapping(value="/{leagueSeq}")
    @ApiOperation(value = "리그 삭제", notes = "리그를 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 403, message = "토큰 없음"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deleteLeague(
            @PathVariable(value = "leagueSeq")
            @ApiParam(value = "리그 삭제", required = true) Long leagueSeq) {

        /**
         * 권한 확인 필요!!
         */

        // 등록된 대회가 없을 경우
        if ( leagueService.findLeagueByLeagueSeq(leagueSeq) == null ) {
            return ResponseEntity.status(404).body("등록된 대회가 없습니다.");
        }

        try {
            League league = leagueService.findLeagueByLeagueSeq(leagueSeq);
            leagueService.deleteLeague(league);
            return ResponseEntity.status(200).body("대회 삭제 성공");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 삭제 실패");
        }
    }

    /**
     * 대회 신청 마감
     */
    @PatchMapping("close/{leagueSeq}")
    @ApiOperation(value = "대회 신청 마감", notes = "대회 신청 마감")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 404, message = "대회 없음"),
            @ApiResponse(code = 405, message = "입력 오류"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> closeLeague(
            @PathVariable(value = "leagueSeq")
            @ApiParam(value = "대회 신청 마감", required = true) Long leagueSeq) {

        // 등록된 대회가 없을 경우
        if ( leagueService.findLeagueByLeagueSeq(leagueSeq) == null ) {
            return ResponseEntity.status(404).body("등록된 대회가 없습니다.");
        }

        try {
            Boolean leagueClose = leagueService.closeLeague(leagueSeq);

            if (leagueClose) {
                return ResponseEntity.status(200).body("대회 신청이 마감되었습니다.");
            } else {
                return ResponseEntity.status(405).body("대회 신청이 마감에 실패하였습니다.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 신청 마감에 문제가 발생하였습니다.");
        }
    }


    /**
     * 대회 신청 마감 조회
     */
    @GetMapping("close/{leagueSeq}")
    @ApiOperation(value = "대회 신청 마감 조회", notes = "leagueSeq를 통해 대회 신청 마감 여부 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 404, message = "대회 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> getLeagueStatus(
            @PathVariable(value = "leagueSeq")
            @ApiParam(value = "대회 신청 마감 조회", required = true) Long leagueSeq) {

        // 등록된 대회가 없을 경우
        if ( leagueService.findLeagueByLeagueSeq(leagueSeq) == null ) {
            return ResponseEntity.status(404).body("등록된 대회가 없습니다.");
        }

        try {
            League league = leagueService.findLeagueByLeagueSeq(leagueSeq);
            return ResponseEntity.status(200).body(league.getLeagueClose());
        } catch (Exception e) {
            return ResponseEntity.status(400).body("대회 신청 마감 여부 조회 실패");
        }
    }
}
