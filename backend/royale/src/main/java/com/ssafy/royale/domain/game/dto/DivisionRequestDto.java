package com.ssafy.royale.domain.game.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DivisionRequestDto {

    @NotNull
    private String divisionAge;
    @NotNull
    private String divisionBelt;
    @NotNull
    private String divisionGender;
    @NotNull
    private String divisionType;
    @NotNull
    private String divisionWeight;
}
