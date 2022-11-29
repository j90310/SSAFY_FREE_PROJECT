package com.ssafy.royale.domain.user.api;

import com.ssafy.royale.domain.user.dto.SearchTeamResponseDto;
import com.ssafy.royale.domain.user.service.TeamService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "Team API", tags = {"Team"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/teams")
public class TeamController {
    private final TeamService teamService;
    public ResponseEntity<List<SearchTeamResponseDto>> getApplyList(@PathVariable String teamName){
        return new ResponseEntity<>(teamService.getTeamList(teamName), HttpStatus.OK);
    }
}
