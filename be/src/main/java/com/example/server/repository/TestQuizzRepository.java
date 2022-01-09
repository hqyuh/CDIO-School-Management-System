package com.example.server.repository;

import com.example.server.model.TestQuizz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestQuizzRepository extends JpaRepository<TestQuizz, Long> {

    TestQuizz findTestQuizzById(Long id);

    List<TestQuizz> findAllTestQuizzBySubjectId(Long id);

    @Query("SELECT u FROM TestQuizz u WHERE u.activationCode = :code")
    TestQuizz findQuizzByCode(@Param("code") String code);

    @Modifying
    @Query("UPDATE TestQuizz t SET t.isPrivate = ?2 WHERE t.id = ?1")
    public void updateQuizzStatus(Long id, boolean status);

}