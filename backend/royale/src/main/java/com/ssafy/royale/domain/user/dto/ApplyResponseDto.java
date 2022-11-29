package com.ssafy.royale.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class ApplyResponseDto {
    private Long applySeq;
    private Long userSeq;
    private String name;
    private String phoneNumber;
    private boolean isBodyMeasurements;
}
