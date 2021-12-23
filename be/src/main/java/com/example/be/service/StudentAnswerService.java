package com.example.be.service;

import com.example.be.dto.StudentAnswerDTO;
import com.example.be.mapper.StudentAnswerMapper;
import com.example.be.model.Question;
import com.example.be.model.StudentAnswer;
import com.example.be.model.TestQuizz;
import com.example.be.model.User;
import com.example.be.repository.QuestionRepository;
import com.example.be.repository.StudentAnswerRepository;
import com.example.be.repository.TestQuizzRepository;
import com.example.be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentAnswerService {

    private final StudentAnswerRepository repo;
    private final StudentAnswerMapper studentAnswerMapper;
    private final TestQuizzRepository testQuizzRepo;
    private final QuestionRepository questionRepo;
    private final AuthService authService;
    private final UserRepository userRepo;

    @Autowired
    public StudentAnswerService(StudentAnswerRepository repo,
                                StudentAnswerMapper studentAnswerMapper,
                                TestQuizzRepository testQuizzRepo,
                                QuestionRepository questionRepo,
                                AuthService authService, UserRepository userRepo) {
        this.repo = repo;
        this.studentAnswerMapper = studentAnswerMapper;
        this.testQuizzRepo = testQuizzRepo;
        this.questionRepo = questionRepo;
        this.authService = authService;
        this.userRepo = userRepo;
    }

    public List<StudentAnswerDTO> getAll(){
        return repo.findAll()
                .stream()
                .map(studentAnswerMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public List<StudentAnswerDTO> getAllByTestQuizzId(Long id){
        return repo.findByTestQuizzId(id)
                .stream()
                .map(studentAnswerMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public StudentAnswer saveStudentAnswer(StudentAnswerDTO studentAnswerDTO){

        TestQuizz testQuizz = testQuizzRepo.findTestQuizzById(studentAnswerDTO.getTestQuizzId());
        Question question = questionRepo.findQuestionById(studentAnswerDTO.getQuestionId());

        StudentAnswer studentAnswer = studentAnswerMapper
                .map(studentAnswerDTO, testQuizz, question, authService.getCurrentUser());
        studentAnswer.setIsSelected(studentAnswerDTO.getIsSelected());
        studentAnswer.setCompletionTime(Instant.now());

        return repo.save(studentAnswer);
    }

    public float getMark(Long id){
        return repo.getMarkByTestQuizzId(id);
    }

}
