package com.example.server.mapper;

import com.example.server.dto.StudentMarkDTO;
import com.example.server.model.StudentMark;
import com.example.server.model.TestQuizz;
import com.example.server.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentMarkMapper {

    StudentMarkMapper INSTANCE = Mappers.getMapper(StudentMarkMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "mark", ignore = true)
    @Mapping(target = "testQuizz", source = "testQuizz")
    @Mapping(target = "user", source = "user")
    StudentMark map(StudentMarkDTO studentMarkDTO, TestQuizz testQuizz, User user);

    @Mapping(target = "testQuizzId", expression = "java(studentMark.getTestQuizz().getId())")
    @Mapping(target = "name", expression = "java(studentMark.getTestQuizz().getName())")
    @Mapping(target = "username", expression = "java(studentMark.getUser().getUsername())")
    @Mapping(target = "completedDate", expression = "java(studentMark.getCompletedDate())")
    StudentMarkDTO mapToDTO(StudentMark studentMark);

}
