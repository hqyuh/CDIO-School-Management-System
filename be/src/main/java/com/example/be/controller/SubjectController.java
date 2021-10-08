package com.example.be.controller;

import com.example.be.model.Subject;
import com.example.be.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    private final SubjectService service;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.service = subjectService;
    }

    @GetMapping
    public ResponseEntity<List<Subject>> getAllSubject(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(service.findAllSubjects());
    }

    @PostMapping
    public ResponseEntity<Subject> createSubject(@RequestBody Subject subject){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.addSubject(subject));
    }

    @PutMapping
    public ResponseEntity<Subject> updateSubject(@RequestBody Subject subject){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(service.updateSubject(subject));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSubject(@PathVariable("id") Long id){
        service.deleteSubject(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
