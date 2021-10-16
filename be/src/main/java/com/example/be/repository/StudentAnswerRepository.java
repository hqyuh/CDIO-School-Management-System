package com.example.be.repository;

import com.example.be.model.StudentAnswer;
import com.example.be.model.TestQuizz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.websocket.server.PathParam;
import java.util.List;

@Repository
public interface StudentAnswerRepository extends JpaRepository<StudentAnswer, Long> {

    List<StudentAnswer> findByTestQuizz(TestQuizz testQuizz);

    List<StudentAnswer> findByTestQuizzId(Long id);

    @Query("SELECT sum(q.mark) FROM Question q, StudentAnswer s WHERE q.id = s.question.id " +
            "AND q.result = s.isSelected AND s.testQuizz.id = :id")
    float getMarkByTestQuizzId(@PathParam("id") Long id);

}