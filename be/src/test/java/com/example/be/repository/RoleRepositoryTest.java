package com.example.be.repository;

import com.example.be.model.Role;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class RoleRepositoryTest {

    @Autowired
    private  RoleRepository repo;

    @Test
    public void testCreateFirstRole(){
        Role roleAdmin = new Role("Admin", "manage everything");
        Role saveRole = repo.save(roleAdmin);

        assertThat(saveRole.getId()).isGreaterThan(0);
    }

    @Test
    public void testCreateRole(){
        Role roleTeacher = new Role("Teacher", "");
        Role roleUser = new Role("User", "just do the test");

        repo.saveAll(List.of(roleTeacher, roleUser));
    }

}