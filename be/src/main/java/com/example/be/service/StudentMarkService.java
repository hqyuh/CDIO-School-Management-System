package com.example.be.service;

import com.example.be.dto.StudentMarkDTO;
import com.example.be.mapper.StudentMarkMapper;
import com.example.be.model.StudentMark;
import com.example.be.model.TestQuizz;
import com.example.be.repository.StudentMarkRepository;
import com.example.be.repository.TestQuizzRepository;
import com.example.be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentMarkService {

    private final StudentMarkRepository repo;
    private final TestQuizzRepository testQuizzRepo;
    private final AuthService authService;
    private final StudentMarkMapper studentMarkMapper;

    @Autowired
    public StudentMarkService(StudentMarkRepository repo,
                              TestQuizzRepository testQuizzRepo,
                              AuthService authService,
                              StudentMarkMapper studentMarkMapper) {
        this.repo = repo;
        this.testQuizzRepo = testQuizzRepo;
        this.authService = authService;
        this.studentMarkMapper = studentMarkMapper;
    }

    public void saveStudentMark(StudentMarkDTO studentMarkDTO) {
        TestQuizz testQuizz = testQuizzRepo.findTestQuizzById(studentMarkDTO.getTestQuizzId());

        StudentMark studentMark = studentMarkMapper.map(studentMarkDTO, testQuizz, authService.getCurrentUser());
        studentMark.setMark(studentMarkDTO.getMark());
        repo.save(studentMark);
    }

    public List<StudentMarkDTO> getAllStudentMarkByUsername(String username) {
        return repo.findByUsername(username)
                .stream()
                .map(studentMarkMapper::mapToDTO)
                .collect(Collectors.toList());
    }

    public List<StudentMarkDTO> getStudentMarkByTestId(Long testId) {
        return repo.findByTestQuizzId(testId)
                .stream()
                .map(studentMarkMapper::mapToDTO)
                .collect(Collectors.toList());
    }

}
