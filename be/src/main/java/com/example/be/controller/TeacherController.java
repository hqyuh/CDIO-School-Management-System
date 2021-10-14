package com.example.be.controller;

import com.example.be.model.Teacher;
import com.example.be.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    private final TeacherService service;

    @Autowired
    public TeacherController(TeacherService service) {
        this.service = service;
    }

    @GetMapping
    private ResponseEntity<List<Teacher>> getAllTeacher(){
        return ResponseEntity
                .status(OK)
                .body(service.getAllTeacher());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable("id") Long id){
        return ResponseEntity
                .status(OK)
                .body(service.getTeacherById(id));
    }

    @PostMapping
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher){
        return ResponseEntity
                .status(CREATED)
                .body(service.addTeacher(teacher));
    }

    @PutMapping
    public ResponseEntity<Teacher> updateTeacher(@RequestBody Teacher teacher){
        return ResponseEntity
                .status(OK)
                .body(service.updateTeacher(teacher));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTeacher(@PathVariable("id") Long id){
        service.deleteTeacher(id);
        return new ResponseEntity<>(OK);
    }
}
