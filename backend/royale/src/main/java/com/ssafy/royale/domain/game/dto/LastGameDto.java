package com.ssafy.royale.domain.game.dto;

import com.ssafy.royale.domain.game.domain.Division;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LastGameDto {
    long gameSeq;
    String apply1name;
    String apply2name;
    String apply1score;
    String apply2score;
    Division division;
}
