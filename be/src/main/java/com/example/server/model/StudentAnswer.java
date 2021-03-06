package com.example.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "student_answer")
@Entity
public class StudentAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "test_quizz_id")
    private TestQuizz testQuizz;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "question_id")
    private Question question;

    @Column(name = "is_selected", length = 5)
    private String isSelected;

    @Column(name = "completion_time")
    private Instant completionTime;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;

}