package com.example.be.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long user_id;

    @Column(name = "user_name")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password", length = 64)
    private String password;

    @Column(name = "created")
    private Instant created;

    @Column(name = "enabled")
    private Boolean enabled;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "role_id")
    private Role role;

}