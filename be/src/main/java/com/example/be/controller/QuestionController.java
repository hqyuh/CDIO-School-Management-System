package com.example.be.controller;

import com.example.be.model.Question;
import com.example.be.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    private final QuestionService service;

    @Autowired
    public QuestionController(QuestionService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Question> addQuestion(@RequestBody Question question){
        return ResponseEntity
                .status(CREATED)
                .body(service.addQuestion(question));
    }

    @GetMapping
    public ResponseEntity<List<Question>> getQuestion(){
        return ResponseEntity
                .status(OK)
                .body(service.getAll());
    }
}
