package com.example.be.mapper;

import com.example.be.dto.StudentMarkDTO;
import com.example.be.model.StudentMark;
import com.example.be.model.TestQuizz;
import com.example.be.model.User;
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
    @Mapping(target = "userId", expression = "java(studentMark.getUser().getUserId())")
    StudentMarkDTO mapToDTO(StudentMark studentMark);

}
