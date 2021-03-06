package com.example.server.controller;

import com.example.server.dto.QuestionDTO;
import com.example.server.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<QuestionDTO> addQuestion(@RequestBody QuestionDTO questionDTO){
        service.addQuestion(questionDTO);
        return new ResponseEntity<>(CREATED);
    }

    @PutMapping
    public ResponseEntity<QuestionDTO> updateQuestion(@RequestBody QuestionDTO questionDTO){
        // service.updateQuestion(questionDTO);
        return new ResponseEntity<>(OK);
    }

    @GetMapping
    public ResponseEntity<List<QuestionDTO>> getQuestion(){
        return ResponseEntity
                .status(OK)
                .body(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionDTO> getQuestionById(@PathVariable("id") Long id) {
        return ResponseEntity
                .status(OK)
                .body(service.getQuestionById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuestionById(@PathVariable("id") Long id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
