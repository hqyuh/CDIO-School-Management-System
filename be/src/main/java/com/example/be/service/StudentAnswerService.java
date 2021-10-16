package com.example.be.service;

import com.example.be.dto.StudentAnswerDTO;
import com.example.be.mapper.StudentAnswerMapper;
import com.example.be.model.Question;
import com.example.be.model.StudentAnswer;
import com.example.be.model.TestQuizz;
import com.example.be.repository.QuestionRepository;
import com.example.be.repository.StudentAnswerRepository;
import com.example.be.repository.TestQuizzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentAnswerService {

    private final StudentAnswerRepository repo;
    private final StudentAnswerMapper studentAnswerMapper;
    private final TestQuizzRepository testQuizzRepo;
    private final QuestionRepository questionRepo;

    @Autowired
    public StudentAnswerService(StudentAnswerRepository repo,
                                StudentAnswerMapper studentAnswerMapper,
                                TestQuizzRepository testQuizzRepo,
                                QuestionRepository questionRepo) {
        this.repo = repo;
        this.studentAnswerMapper = studentAnswerMapper;
        this.testQuizzRepo = testQuizzRepo;
        this.questionRepo = questionRepo;
    }

    public List<StudentAnswerDTO> getAll(){
        return repo.findAll()
                .stream()
                .map(studentAnswerMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public StudentAnswer saveStudentAnswer(StudentAnswerDTO studentAnswerDTO){

        TestQuizz testQuizz = testQuizzRepo.findTestQuizzById(studentAnswerDTO.getTestQuizzId());
        Question question = questionRepo.findQuestionById(studentAnswerDTO.getQuestionId());

        StudentAnswer studentAnswer = studentAnswerMapper.map(studentAnswerDTO, testQuizz, question);
        studentAnswer.setIsResult(studentAnswerDTO.getIsResult());
        studentAnswer.setCompletionTime(Instant.now());
        return repo.save(studentAnswer);
    }

}
