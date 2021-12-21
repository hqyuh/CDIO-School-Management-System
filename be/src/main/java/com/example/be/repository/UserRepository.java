package com.example.be.repository;

import com.example.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> getUserByEmail(@Param("email") String email);

    @Modifying
    @Query("UPDATE User u SET u.enabled = ?2 WHERE u.userId = ?1")
    public void updateEnabledStatus(Long id, boolean enabled);

}