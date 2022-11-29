package com.ssafy.royale.domain.game.domain;

import com.ssafy.royale.domain.game.dto.GameLogUpdateRequestDto;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
@Entity
public class GameLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_log_seq")
    private Long gameLogSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "game_seq", nullable = false)
    private Game game;

    @Column(name = "score1", unique = false, nullable = true)
    private int score1;
    @Column(name = "score2", unique = false, nullable = true)
    private int score2;
    @Column(name = "advantage1", unique = false, nullable = true)
    private int advantage1;
    @Column(name = "advantage2", unique = false, nullable = true)
    private int advantage2;
    @Column(name = "penalty1", unique = false, nullable = true)
    private int penalty1;
    @Column(name = "penalty2", unique = false, nullable = true)
    private int penalty2;

    @Column(name = "dq", unique = false, nullable = true)
    private Long dq;
    @Column(name = "sub", unique = false, nullable = true)
    private Long sub;

    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;
    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;

    public void updateGameLog(GameLogUpdateRequestDto gameLogUpdateRequestDto) {
        this.score1 = gameLogUpdateRequestDto.getScore1();
        this.score2 = gameLogUpdateRequestDto.getScore2();
        this.advantage1 = gameLogUpdateRequestDto.getAdvantage1();
        this.advantage2 = gameLogUpdateRequestDto.getAdvantage2();
        this.penalty1 = gameLogUpdateRequestDto.getPenalty1();
        this.penalty2 = gameLogUpdateRequestDto.getPenalty2();
        this.dq = gameLogUpdateRequestDto.getDq();
        this.sub = gameLogUpdateRequestDto.getSub();
    }
}
