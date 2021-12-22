package com.example.be.repository;

import com.example.be.model.StudentMark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentMarkRepository extends JpaRepository<StudentMark, Long> {

    @Query("SELECT u FROM StudentMark u WHERE u.user.username = :username")
    List<StudentMark> findByUsername(@Param("username") String username);

    List<StudentMark> findByTestQuizzId(Long testId);

}