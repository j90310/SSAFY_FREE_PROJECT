package com.ssafy.royale.domain.league.domain;

import com.ssafy.royale.domain.user.domain.Apply;
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
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "point_seq")
    private Long pointSeq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "apply_seq", nullable = false)
    private Apply apply;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "league_seq", nullable = false)
    private League league;
    private int score;
    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;
    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;
}
