package com.example.server.mapper;

import com.example.server.dto.StudentAnswerDTO;
import com.example.server.model.Question;
import com.example.server.model.StudentAnswer;
import com.example.server.model.TestQuizz;
import com.example.server.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface StudentAnswerMapper {

    StudentAnswerMapper INSTANCE = Mappers.getMapper(StudentAnswerMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "testQuizz", source = "testQuizz")
    @Mapping(target = "question", source = "question")
    @Mapping(target = "isSelected", ignore = true)
    @Mapping(target = "user", source = "user")
    StudentAnswer map(StudentAnswerDTO studentAnswerDTO, TestQuizz testQuizz, Question question, User user);

    @Mapping(target = "testQuizzId", expression = "java(studentAnswer.getTestQuizz().getId())")
    @Mapping(target = "questionId", expression = "java(studentAnswer.getQuestion().getId())")
    @Mapping(target = "userId", expression = "java(studentAnswer.getUser().getId())")
    StudentAnswerDTO mapToDTO(StudentAnswer studentAnswer);

}
