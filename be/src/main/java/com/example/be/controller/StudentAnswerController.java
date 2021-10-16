package com.example.be.controller;

import com.example.be.dto.StudentAnswerDTO;
import com.example.be.model.StudentAnswer;
import com.example.be.service.StudentAnswerService;
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
    public ResponseEntity<StudentAnswerDTO> saveStudentAnswer(@RequestBody StudentAnswerDTO studentAnswerDTO){
        service.saveStudentAnswer(studentAnswerDTO);
        return new ResponseEntity<>(CREATED);
    }

}
