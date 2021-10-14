package com.example.be.repository;

import com.example.be.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.websocket.server.PathParam;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    @Query("SELECT u FROM Teacher u WHERE u.teacherId = :id")
    Teacher findTeachersById(@PathParam("id") Long id);

}