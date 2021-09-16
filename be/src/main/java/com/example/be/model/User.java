package com.example.be.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.HashSet;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "user_name")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password", length = 64)
    private String password;

    @Column(name = "created")
    private Instant created;

    @Column(name = "enabled")
    private boolean enabled;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role roles;

    public User(String username, String email, String password, Role roles) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}