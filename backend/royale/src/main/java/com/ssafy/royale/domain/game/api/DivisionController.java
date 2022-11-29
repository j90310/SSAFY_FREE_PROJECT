package com.ssafy.royale.domain.game.api;

import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.dto.DivisionRequestDto;
import com.ssafy.royale.domain.game.service.DivisionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api(value = "Division API", tags = {"Division"})
@RestController
@RequestMapping("/api/division")
@RequiredArgsConstructor
public class DivisionController {
    private final DivisionService divisionService;

    @PostMapping
    @ApiOperation(value = "Division Seq 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "실패")
    })
    public ResponseEntity<?> getDivisionSeq(@RequestBody @Valid DivisionRequestDto divisionRequestDto){

        try {
            Division division = divisionService.getDivisionSeq(divisionRequestDto);

            System.out.println("DivisionSeq >>> " + division.getDivisionSeq());
            return ResponseEntity.status(200).body(division.getDivisionSeq());
        } catch (Exception e) {
            return ResponseEntity.status(400).body("등록된 Division이 없습니다.");
        }
    }
}
