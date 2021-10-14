package com.example.be.service;

import com.example.be.model.Teacher;
import com.example.be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository repo;

    @Autowired
    public TeacherService(TeacherRepository repo) {
        this.repo = repo;
    }

    public List<Teacher> getAllTeacher(){
        return repo.findAll();
    }

    public Teacher getTeacherById(Long id){
        return repo.findTeachersById(id);
    }

    public Teacher addTeacher(Teacher teacher){
        return repo.save(teacher);
    }

    public Teacher updateTeacher(Teacher teacher){
        return repo.save(teacher);
    }

    public void deleteTeacher(Long id){
        repo.deleteById(id);
    }

}
