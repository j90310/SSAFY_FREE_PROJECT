package com.ssafy.royale.domain.user.dao;

import com.ssafy.royale.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String userEmail);
    Optional<User> findByUserSeq(long userSeq);
    List<User> findAllByUserName(String userName);
}
