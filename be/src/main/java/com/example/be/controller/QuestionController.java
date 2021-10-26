package com.example.be.controller;

import com.example.be.dto.QuestionDTO;
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
    public ResponseEntity<Question> addQuestion(@RequestBody QuestionDTO questionDTO){
        return ResponseEntity
                .status(CREATED)
                .body(service.addQuestion(questionDTO));
    }

    @GetMapping
    public ResponseEntity<List<QuestionDTO>> getQuestion(){
        return ResponseEntity
                .status(OK)
                .body(service.getAll());
    }
}
