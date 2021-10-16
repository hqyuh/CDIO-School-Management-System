package com.example.be.repository;

import com.example.be.model.StudentAnswer;
import com.example.be.model.TestQuizz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentAnswerRepository extends JpaRepository<StudentAnswer, Long> {

    List<StudentAnswer> findByTestQuizz(TestQuizz testQuizz);

    List<StudentAnswer> findByTestQuizzId(Long id);

}