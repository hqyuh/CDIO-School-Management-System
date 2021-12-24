package com.example.be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentMarkDTO {
    private Long id;
    private float mark;
    private Long testQuizzId;
    private String name;
    private String username;
}
