package com.example.be.service;

import com.example.be.model.Question;
import com.example.be.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository repo;

    @Autowired
    public QuestionService(QuestionRepository repo) {
        this.repo = repo;
    }

    public Question addQuestion(Question question){
        question.setDateCreated(Instant.now());
        return repo.save(question);
    }

    public List<Question> getAll(){
        return repo.findAll();
    }

}
