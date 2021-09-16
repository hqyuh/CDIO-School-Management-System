package com.example.be.repository;

import com.example.be.model.Role;
import com.example.be.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class UserRepositoryTest {

    @Autowired
    private UserRepository repo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateUser(){
        Role roleAdmin = entityManager.find(Role.class, 1L);
        User userMe = new User
                ("quang.huy",
                "hoquang.huyy@gmail.com",
                "123123", roleAdmin);
        User savedUser = repo.save(userMe);
        assertThat(savedUser.getUserId()).isGreaterThan(0);
    }

}