package com.example.be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentAnswerDTO {
    private Long id;
    private Long testQuizzId;
    private Long questionId;
    private String isSelected;
}
