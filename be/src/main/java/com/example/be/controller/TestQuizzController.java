package com.example.be.controller;

import com.example.be.model.TestQuizz;
import com.example.be.service.TestQuizzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/quizz")
public class TestQuizzController {

    private final TestQuizzService service;

    @Autowired
    public TestQuizzController(TestQuizzService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TestQuizz>> getAllQuizz(){
        return ResponseEntity
                .status(OK)
                .body(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestQuizz> getQuizzById(@PathVariable("id") Long id){
        return ResponseEntity
                .status(OK)
                .body(service.findQuizzById(id));
    }

    @GetMapping("/bySubject/{id}")
    public ResponseEntity<List<TestQuizz>> getQuizzBySubject(@PathVariable("id") Long id){
        return ResponseEntity
                .status(OK)
                .body(service.getQuizzBySubjectId(id));
    }

    @PostMapping
    public ResponseEntity<TestQuizz> addQuizz(@RequestBody TestQuizz quizz){
        return ResponseEntity
                .status(CREATED)
                .body(service.addQuizz(quizz));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuizz(@PathVariable("id") Long id){
        service.deleteQuizz(id);
        return new ResponseEntity<>(OK);
    }
}
