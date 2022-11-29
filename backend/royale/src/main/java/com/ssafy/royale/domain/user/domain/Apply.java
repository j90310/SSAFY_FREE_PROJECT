package com.ssafy.royale.domain.user.domain;


import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.game.domain.Division;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@ToString
@Entity
public class Apply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "apply_seq")
    private Long applySeq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "league_seq")
    private League league;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_seq")
    private Team team;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "division_seq")
    private Division division;
//    @Column(name = "league_seq")
//    private Long leagueSeq;
//    @Column(name = "user_seq")
//    private Long userSeq;
//    @Column(name = "team_seq")
//    private Long teamSeq;
//    @Column(name = "division_seq")
//    private Long divisionSeq;
    private boolean weightCheck;
    private boolean moneyCheck;
    @CreationTimestamp
    @Column(name = "REG_DTM")
    private LocalDateTime REG_DTM;

    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;

    public void changeWeightCheck(){
        this.weightCheck = !this.isWeightCheck();
    }
}
