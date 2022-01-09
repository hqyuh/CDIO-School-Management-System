package com.example.server.controller;

import com.example.server.dto.StudentAnswerDTO;
import com.example.server.model.StudentAnswer;
import com.example.server.service.StudentAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/studentAnswer")
public class StudentAnswerController {

    private final StudentAnswerService service;

    @Autowired
    public StudentAnswerController(StudentAnswerService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<StudentAnswerDTO>> getStudentAnswerList() {
        return ResponseEntity
                .status(OK)
                .body(service.getAll());
    }

    @GetMapping("/byQuizz/{id}")
    public ResponseEntity<List<StudentAnswerDTO>> getAllByQuizzId(@PathVariable("id") Long id){
        return ResponseEntity
                .status(OK)
                .body(service.getAllByTestQuizzId(id));
    }

    @PostMapping
    public ResponseEntity<StudentAnswer> saveStudentAnswer(@RequestBody StudentAnswerDTO studentAnswerDTO){
        return ResponseEntity
                .status(CREATED)
                .body(service.saveStudentAnswer(studentAnswerDTO));
    }

    @GetMapping("/calculateMark/{id}")
    public String getMark(@PathVariable("id") Long id){
        return "{ \"mark\": " + service.getMark(id) + " }";
    }

}
