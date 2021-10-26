package com.example.be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDTO {
    private Long id;
    private String text;
    private float mark;
    private Instant dateCreated;
    private String answerA;
    private String answerB;
    private String answerC;
    private String answerD;
    private String result;
    private Long testQuizzId;
}
