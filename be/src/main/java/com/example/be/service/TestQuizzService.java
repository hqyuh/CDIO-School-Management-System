package com.example.be.service;

import com.example.be.model.TestQuizz;
import com.example.be.repository.TestQuizzRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class TestQuizzService {

    private final TestQuizzRepository repo;

    @Autowired
    public TestQuizzService(TestQuizzRepository repo) {
        this.repo = repo;
    }

    public List<TestQuizz> getAll(){
        return repo.findAll();
    }

    public TestQuizz addQuizz(TestQuizz testQuizz){
        testQuizz.setDateCreated(Instant.now());
        testQuizz.setActivationCode(generateActivationCode());
        return repo.save(testQuizz);
    }

    private String generateActivationCode() {
        return RandomStringUtils.randomNumeric(6);
    }

    public TestQuizz updateQuizz(TestQuizz testQuizz) {
        testQuizz.setName(testQuizz.getName());
        testQuizz.setDescription(testQuizz.getDescription());
        testQuizz.setDateCreated(Instant.now());
        testQuizz.setExamTime(testQuizz.getExamTime());
        testQuizz.setActivationCode(testQuizz.getActivationCode());
        return repo.save(testQuizz);
    }

    public void deleteQuizz(Long id){
        repo.deleteById(id);
    }

    public TestQuizz findQuizzById(Long id){
        return repo.findTestQuizzById(id);
    }

    public List<TestQuizz> getQuizzBySubjectId(Long id){
        return repo.findAllTestQuizzBySubjectId(id);
    }

    public TestQuizz findQuizzByCode(String code) {
        return repo.findQuizzByCode(code);
    }

}
