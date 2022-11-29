package com.ssafy.royale.domain.game.domain;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@ToString
@Entity
public class Division {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "division_seq")
    private Long divisionSeq;
    private String divisionGender;
    private String divisionBelt;
    private String divisionAge;
    private String divisionWeight;
    private String divisionType;
}
