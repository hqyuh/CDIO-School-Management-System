package com.example.server.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.Instant;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentMarkDTO {

    private Long id;
    private float mark;
    private Long testQuizzId;
    private String name;
    private String username;

    @JsonFormat(shape = JsonFormat.Shape.STRING,
            pattern = "dd-MM-yyyy hh:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Instant completedDate;

}
