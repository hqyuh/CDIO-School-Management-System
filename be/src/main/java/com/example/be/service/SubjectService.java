package com.example.be.service;

import com.example.be.dto.SubjectDTO;
import com.example.be.mapper.SubjectMapper;
import com.example.be.model.Subject;
import com.example.be.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubjectService {

    private final SubjectRepository repo;
    private final SubjectMapper subjectMapper;
    private final AuthService authService;

    @Autowired
    public SubjectService(SubjectRepository repo,
                          SubjectMapper subjectMapper,
                          AuthService authService) {
        this.repo = repo;
        this.subjectMapper = subjectMapper;
        this.authService = authService;
    }

    public void addSubject(SubjectDTO subjectDTO){
        Subject subject = subjectMapper.map(subjectDTO, authService.getCurrentUser());
        subject.setName(subjectDTO.getName());

        repo.save(subject);
    }

    public List<SubjectDTO> getAllSubjects(){
        return repo.findAll()
                .stream()
                .map(subjectMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public Subject updateSubject(Subject subject){
        subject.setName(subject.getName());
        subject.setDateCreated(Instant.now());
        subject.setUser(authService.getCurrentUser());
        return repo.save(subject);
    }

    public void deleteSubject(Long id){
        repo.deleteById(id);
    }
}
