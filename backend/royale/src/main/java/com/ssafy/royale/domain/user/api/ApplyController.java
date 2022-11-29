package com.ssafy.royale.domain.user.api;

import com.ssafy.royale.domain.user.domain.Apply;
import com.ssafy.royale.domain.user.dto.ApplyResponseDto;
import com.ssafy.royale.domain.user.dto.CreateApplyRequestDto;
import com.ssafy.royale.domain.user.service.ApplyService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "참가자 API", tags = {"Apply"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/applies")
public class ApplyController {


    private final ApplyService applyService;

    @GetMapping("/{name}")
    public ResponseEntity<List<ApplyResponseDto>> getApplyList(@PathVariable String name){
        return new ResponseEntity<>(applyService.getApplyList(name), HttpStatus.OK);
    }

    @PatchMapping("/{userSeq}")
    public ResponseEntity<Void> weightCheck(@PathVariable Long userSeq){
        applyService.weightCheck(userSeq);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "대회 지원")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 400, message = "잘못된 요청"),
            @ApiResponse(code = 405, message = "입력 오류"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> createApply(
            @RequestBody
            @ApiParam(value = "대회 신청 정보", required = true) CreateApplyRequestDto createApplyRequestDto ) {

        try {
            Apply apply = applyService.createApply(createApplyRequestDto);

            return ResponseEntity.status(200).body(apply);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(400).body("대회 지원에 실패하였습니다.");
        }
    }

}
