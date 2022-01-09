package com.example.server.controller;

import com.example.server.model.TestQuizz;
import com.example.server.service.TestQuizzService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PatchMapping
    public ResponseEntity<TestQuizz> updateQuizz(@RequestBody TestQuizz quizz){
        return ResponseEntity
                .status(OK)
                .body(service.updateQuizz(quizz));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuizz(@PathVariable("id") Long id){
        service.deleteQuizz(id);
        return new ResponseEntity<>(OK);
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<TestQuizz> getQuizzByCode(@PathVariable("code") String code){
        return ResponseEntity
                .status(OK)
                .body(service.findQuizzByCode(code));
    }

    @GetMapping("/{id}/status/{status}")
    public ResponseEntity<?> updateTestQuizzStatus(@PathVariable("id") Long id,
                                                   @PathVariable("status") String status) {
        service.updateTestQuizzStatus(id, Boolean.parseBoolean(status));
        return new ResponseEntity<>(OK);
    }

    @PatchMapping("/examtime/{id}")
    public ResponseEntity<TestQuizz> updateExamTime(@PathVariable("id") Long id,
                                                    @RequestBody TestQuizz testQuizz) {
        service.updateExamTime(id, testQuizz);
        return new ResponseEntity<>(OK);
    }
}
