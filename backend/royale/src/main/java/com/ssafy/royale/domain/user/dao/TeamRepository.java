package com.ssafy.royale.domain.user.dao;

import com.ssafy.royale.domain.user.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team, Long> {
    Optional<Team> findByTeamSeq(long TeamSeq);

    List<Team> findByTeamNameContains(String teamName);
}
