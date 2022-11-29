package com.ssafy.royale.domain.user.dao;

import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.user.domain.Apply;
import com.ssafy.royale.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplyRepository extends JpaRepository<Apply, Long> {

    List<Apply> findAllByLeagueAndDivision(League league, Division division);
    List<Apply> findAllByUser(User user);
    List<Apply> findAllByLeague(League league);
}
