package com.ssafy.royale.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SearchTeamResponseDto {
    private Long teamSeq;
    private String teamName;
    private String associationName;
}