package com.example.be.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubjectDTO {
    private Long id;
    private String name;
    private Instant dateCreated;
    private Long userId;
}
