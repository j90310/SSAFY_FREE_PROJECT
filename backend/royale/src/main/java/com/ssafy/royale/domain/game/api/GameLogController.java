package com.ssafy.royale.domain.game.api;

import com.ssafy.royale.domain.game.dto.GameLogDto;
import com.ssafy.royale.domain.game.dto.GameLogUpdateRequestDto;
import com.ssafy.royale.domain.game.service.GameLogService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/game-log")
@RequiredArgsConstructor
public class GameLogController {

    @Autowired
    GameLogService gameLogService;

    @PostMapping("/{game_seq}")
    @ApiOperation(value = "경기 기록 생성", notes = "경기 번호로 경기 기록 초기값 생성")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> init(@PathVariable(value = "game_seq") @ApiParam(value = "경기 번호") Long gameSeq) {

        if (gameLogService.init(gameSeq)) {
            return ResponseEntity.status(200).body("성공");
        } else {
            return ResponseEntity.status(400).body("잘못된 요청");
        }

    }

    @PatchMapping("")
    @ApiOperation(value = "경기 기록 수정", notes = "경기 내용 DTO로 로그 수정")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> update(@RequestBody @ApiParam(value = "경기 내용 객체") GameLogUpdateRequestDto gameLogUpdateRequestDto) {
        return ResponseEntity.status(200).body(GameLogDto.from(gameLogService.update(gameLogUpdateRequestDto)));
    }

    @GetMapping("/{game_seq}")
    @ApiOperation(value = "경기 기록 조회", notes = "경기 번호로 경기 기록 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> select(@PathVariable(value = "game_seq") @ApiParam(value = "경기 번호") Long gameSeq) {

        if (gameLogService.select(gameSeq) != null) {
            return ResponseEntity.status(200).body(GameLogDto.from(gameLogService.select(gameSeq)));
        } else {
            return ResponseEntity.status(200).body(null);
        }

    }

}
