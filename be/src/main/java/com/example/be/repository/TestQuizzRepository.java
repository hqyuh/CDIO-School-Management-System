package com.example.be.repository;

import com.example.be.model.TestQuizz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestQuizzRepository extends JpaRepository<TestQuizz, Long> {

    TestQuizz findTestQuizzById(Long id);

}