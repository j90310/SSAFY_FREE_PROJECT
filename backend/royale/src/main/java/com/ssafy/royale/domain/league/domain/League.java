package com.ssafy.royale.domain.league.domain;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
@Setter
@ToString
public class League {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "league_seq")
    private Long leagueSeq;
    private String leagueName;
    private String leaguePlace;
    private LocalDate leagueDate;
    private LocalDateTime leagueDeadline;
    private String leaguePoster;
    private String leagueInfo;

    private Boolean leagueClose;
    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;
    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;

    public void updateLeague(String leagueName, String leaguePlace, LocalDate leagueDate,
                             LocalDateTime leagueDeadline, String leaguePoster, String leagueInfo) {
        this.leagueName = leagueName;
        this.leaguePlace = leaguePlace;
        this.leagueDate = leagueDate;
        this.leagueDeadline = leagueDeadline;
        this.leaguePoster = leaguePoster;
        this.leagueInfo = leagueInfo;
    }
}
