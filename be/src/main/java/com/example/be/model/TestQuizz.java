package com.example.be.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "test_quizz")
@Entity
public class TestQuizz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 45)
    private String name;

    @JsonFormat(shape = JsonFormat.Shape.STRING,
            pattern = "dd-MM-yyyy hh:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    @Column(name = "date_created")
    private Instant dateCreated;

    @Column(name = "description")
    private String description;

    @Column(name = "exam_time")
    private Integer examTime;

    @OneToMany
    @JoinColumn(name = "test_id")
    private List<Question> questions;

    @ManyToOne
    //@JsonIgnore
    @JoinColumn(name = "subject_id")
    private Subject subject;

}