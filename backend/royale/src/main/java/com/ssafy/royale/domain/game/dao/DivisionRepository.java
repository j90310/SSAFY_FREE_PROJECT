package com.ssafy.royale.domain.game.dao;

import com.ssafy.royale.domain.game.domain.Division;
import com.sun.org.apache.xpath.internal.operations.Div;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.validation.constraints.NotNull;
import java.util.Optional;

public interface DivisionRepository extends JpaRepository<Division, Long> {
    Optional<Division> findByDivisionSeq(long DivisionSeq);
    Optional<Division> findDivisionSeqByDivisionAgeAndDivisionBeltAndDivisionGenderAndDivisionTypeAndDivisionWeight(String divisionAge, String divisionBelt, String divisionGender, String divisionType, String divisionWeight);
}
