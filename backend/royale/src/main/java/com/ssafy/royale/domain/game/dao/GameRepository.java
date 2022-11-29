package com.ssafy.royale.domain.game.dao;

import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.league.domain.League;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Long> {

    List<Game> findAllByLeagueAndDivision(League league, Division division);
    int countByLeagueAndDivision(League league, Division division);
    Optional<Game> findTop1ByLeagueAndDivisionAndTournamentRoundText(League league, Division division, int tournamentRoundText);

    List<Game> findTop8GameByLeagueAndGameWinnerIsNotNullOrderByGameSeqDesc(League league);
//    List<Game> findAllByGameWinner(long gameWinner);
}
