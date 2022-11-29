package com.ssafy.royale.domain.game.api;

import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.dto.GameResponseDto;
import com.ssafy.royale.domain.game.dto.GameScoreRequestDto;
import com.ssafy.royale.domain.game.dto.TournamentResponseDto;
import com.ssafy.royale.domain.game.service.GameService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor
public class GameController {
    private final GameService gameService;

    @GetMapping("/finish/{seq}")
    @ApiOperation(value = "대회 신청 마감, 자동 게임 삽입")
    public ResponseEntity<Boolean> autoMakeGame(@PathVariable Long seq){
        return new ResponseEntity<>(gameService.autoMakeGame(seq), HttpStatus.OK);
    }

    @GetMapping("/{seq}")
    @ApiOperation(value = "해당게임 정보 보내기")
    public ResponseEntity<GameResponseDto> getGameInfo(@PathVariable Long seq){
        return new ResponseEntity<>(gameService.getGameInfo(seq), HttpStatus.OK);
    }
    @GetMapping("")
    @ApiOperation(value = "Division을 통한 대진표 조회")
    public ResponseEntity<List<TournamentResponseDto>> getTournament(@RequestParam Long leagueSeq, @RequestParam Long divisionSeq){
        System.out.println(leagueSeq + " " + divisionSeq);
        List<TournamentResponseDto> result = gameService.getTournament(leagueSeq, divisionSeq);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/score.do")
    @ApiOperation(value = "경기 종료 후 점수 삽입")
    public ResponseEntity<Game> insertGameScore(@RequestBody GameScoreRequestDto dto){
        System.out.println(dto);
        return new ResponseEntity<>(gameService.insertCurrentGameScore(dto), HttpStatus.OK);
    }

    @GetMapping("/last-game.do/{leagueSeq}")
    @ApiOperation(value = "최근 게임 8개 조회")
    public ResponseEntity<?> getLastGame(@PathVariable Long leagueSeq){
        return new ResponseEntity<>(gameService.getLastGame(leagueSeq), HttpStatus.OK);
    }
}
