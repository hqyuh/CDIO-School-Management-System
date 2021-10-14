package com.example.be.service;

import com.example.be.model.Subject;
import com.example.be.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class SubjectService {

    private final SubjectRepository repo;

    @Autowired
    public SubjectService(SubjectRepository repo) {
        this.repo = repo;
    }

    public Subject addSubject(Subject subject){
        subject.setDateCreated(Instant.now());
        return repo.save(subject);
    }

    public List<Subject> findAllSubjects(){
        return repo.findAll();
    }

    public Subject updateSubject(Subject subject){
        subject.setDateCreated(Instant.now());
        return repo.save(subject);
    }

    public void deleteSubject(Long id){
        repo.deleteById(id);
    }
}
