package com.example.server.controller;

import com.example.server.dto.SubjectDTO;
import com.example.server.model.Subject;
import com.example.server.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    private final SubjectService service;

    @Autowired
    public SubjectController(SubjectService subjectService) {
        this.service = subjectService;
    }

    @GetMapping
    public ResponseEntity<List<SubjectDTO>> getAllSubject(){
        return ResponseEntity
                .status(OK)
                .body(service.getAllSubjects());
    }

    @PostMapping
    public ResponseEntity<SubjectDTO> createSubject(@RequestBody SubjectDTO subjectDTO){
        service.addSubject(subjectDTO);
        return new ResponseEntity<>(CREATED);
    }

    @PutMapping
    public ResponseEntity<Subject> updateSubject(@RequestBody Subject subject){
        service.updateSubject(subject);
        return new ResponseEntity<>(OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSubject(@PathVariable("id") Long id){
        service.deleteSubject(id);
        return new ResponseEntity<>(OK);
    }
}
