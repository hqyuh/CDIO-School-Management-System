package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "student_mark")
@Entity
public class StudentMark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "mark")
    private float mark;

    @Column(name = "completed_date")
    private Instant completedDate;

    @OneToOne
    @JoinColumn(name = "test_mark_id")
    private TestQuizz testQuizz;

    @OneToOne
    @JoinColumn(name = "test_user_id")
    private User user;
}