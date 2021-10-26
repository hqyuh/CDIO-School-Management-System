package com.example.be.service;

import com.example.be.dto.QuestionDTO;
import com.example.be.dto.StudentAnswerDTO;
import com.example.be.mapper.QuestionMapper;
import com.example.be.model.Question;
import com.example.be.model.TestQuizz;
import com.example.be.repository.QuestionRepository;
import com.example.be.repository.TestQuizzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    private final QuestionRepository repo;
    private final QuestionMapper questionMapper;
    private final TestQuizzRepository testQuizzRepo;

    @Autowired
    public QuestionService(QuestionRepository repo,
                           QuestionMapper questionMapper,
                           TestQuizzRepository testQuizzRepo) {
        this.repo = repo;
        this.questionMapper = questionMapper;
        this.testQuizzRepo = testQuizzRepo;
    }

    public Question addQuestion(QuestionDTO questionDTO){
        TestQuizz testQuizz = testQuizzRepo.findTestQuizzById(questionDTO.getTestQuizzId());
        Question question = questionMapper
                .map(questionDTO, testQuizz);
        question.setText(questionDTO.getText());
        question.setAnswerA(questionDTO.getAnswerA());
        question.setAnswerB(questionDTO.getAnswerB());
        question.setAnswerC(questionDTO.getAnswerC());
        question.setAnswerD(questionDTO.getAnswerD());
        question.setMark(questionDTO.getMark());
        question.setResult(questionDTO.getResult());
        return repo.save(question);
    }

    public List<QuestionDTO> getAll(){
        return repo.findAll()
                .stream()
                .map(questionMapper::mapToDTO)
                .collect(Collectors.toList());
    }


}
