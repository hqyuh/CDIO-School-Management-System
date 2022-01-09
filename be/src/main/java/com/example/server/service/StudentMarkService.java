package com.example.server.service;

import com.example.server.dto.StudentMarkDTO;
import com.example.server.mapper.StudentMarkMapper;
import com.example.server.model.StudentMark;
import com.example.server.model.TestQuizz;
import com.example.server.repository.StudentMarkRepository;
import com.example.server.repository.TestQuizzRepository;
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
        studentMark.setCompletedDate(Instant.now());
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
