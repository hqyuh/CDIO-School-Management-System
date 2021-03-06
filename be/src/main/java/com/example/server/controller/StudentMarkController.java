package com.example.server.controller;

import com.example.server.dto.StudentMarkDTO;
import com.example.server.service.StudentMarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/studentMark")
public class StudentMarkController {

    private final StudentMarkService service;

    @Autowired
    public StudentMarkController(StudentMarkService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<StudentMarkDTO> saveStudentMark(@RequestBody StudentMarkDTO studentMarkDTO) {
        service.saveStudentMark(studentMarkDTO);
        return new ResponseEntity<>(OK);
    }

    @GetMapping("/user/{username}")
    private ResponseEntity<List<StudentMarkDTO>> getAllStudentMark(@PathVariable("username") String username) {
        return ResponseEntity
                .status(OK)
                .body(service.getAllStudentMarkByUsername(username));
    }

    @GetMapping("/quizz/{id}")
    private ResponseEntity<List<StudentMarkDTO>> getStudentMarkByTestId(@PathVariable("id") Long id) {
        return ResponseEntity
                .status(OK)
                .body(service.getStudentMarkByTestId(id));
    }

}
