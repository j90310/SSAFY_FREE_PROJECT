package com.ssafy.royale.domain.league.dao;

import com.ssafy.royale.domain.league.domain.League;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LeagueRepository extends JpaRepository<League, Long> {
    Optional<League> findByLeagueSeq(long LeagueSeq);
}
