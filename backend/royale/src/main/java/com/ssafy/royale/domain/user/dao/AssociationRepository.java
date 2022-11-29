package com.ssafy.royale.domain.user.dao;

import com.ssafy.royale.domain.user.domain.Association;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AssociationRepository extends JpaRepository<Association, Long> {
    Optional<Association> findByAssociationSeq(long AssociationSeq);
}
