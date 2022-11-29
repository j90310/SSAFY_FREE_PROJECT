package com.ssafy.royale.domain.league.dao;

import com.ssafy.royale.domain.league.domain.Point;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointRepository extends JpaRepository<Point, Long> {
}
