package com.ssafy.royale.domain.game.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.user.domain.Apply;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@ToString
@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_seq")
    private Long gameSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "league_seq")
    @JsonIgnore
    private League league;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "division_seq")
    private Division division;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player1_seq")
    @JsonIgnore
    private Apply player1_seq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player2_seq")
    @JsonIgnore
    private Apply player2_seq;
    private int matNum;
    private int matGameNum;
    private String player1_score;
    private String player2_score;
    private Long gameWinner;
    private int tournamentRoundText;
    @CreationTimestamp
    @Column(name = "REG_DTM")
    private LocalDateTime REG_DTM;
    @UpdateTimestamp
    @Column(name = "MOD_DTM")
    private LocalDateTime MOD_DTM;

    public void setAddPlayer(Apply player1_seq, Apply player2_seq){
        this.player1_seq = player1_seq;
        this.player2_seq = player2_seq;
    }
    public void setScoreAndWinner(String player1Score, String player2Score, Long gameWinner){
        this.player1_score = player1Score;
        this.player2_score = player2Score;
        this.gameWinner = gameWinner;
    }

    public void setGameWinner(Apply winner){
        if(this.player1_seq == null) this.player1_seq = winner;
        else this.player2_seq = winner;
    }
}
