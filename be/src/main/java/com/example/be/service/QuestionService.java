package com.example.be.service;

import com.example.be.dto.QuestionDTO;
import com.example.be.exception.QuestionNotFoundException;
import com.example.be.mapper.QuestionMapper;
import com.example.be.model.Question;
import com.example.be.model.TestQuizz;
import com.example.be.repository.QuestionRepository;
import com.example.be.repository.TestQuizzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
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

    public void addQuestion(QuestionDTO questionDTO){
        TestQuizz testQuizz = testQuizzRepo.findTestQuizzById(questionDTO.getTestQuizzId());
        Question question = questionMapper.map(questionDTO, testQuizz);
        question.setText(questionDTO.getText());
        question.setAnswerA(questionDTO.getAnswerA());
        question.setAnswerB(questionDTO.getAnswerB());
        question.setAnswerC(questionDTO.getAnswerC());
        question.setAnswerD(questionDTO.getAnswerD());
        question.setMark(questionDTO.getMark());
        question.setResult(questionDTO.getResult());
        repo.save(question);
    }

    public List<QuestionDTO> getAll(){
        return repo.findAll()
                .stream()
                .map(questionMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public QuestionDTO getQuestionById(Long id) throws QuestionNotFoundException {
        Question question = repo.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException("No questions found with id " + id));
        return questionMapper.mapToDTO(question);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }



}
