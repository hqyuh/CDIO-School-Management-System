package com.example.be.mapper;

import com.example.be.dto.QuestionDTO;
import com.example.be.model.Question;
import com.example.be.model.TestQuizz;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    QuestionMapper INSTANCE = Mappers.getMapper(QuestionMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "text", ignore = true)
    @Mapping(target = "mark", ignore = true)
    @Mapping(target = "answerA", ignore = true)
    @Mapping(target = "answerB", ignore = true)
    @Mapping(target = "answerC", ignore = true)
    @Mapping(target = "answerD", ignore = true)
    @Mapping(target = "result", ignore = true)
    @Mapping(target = "dateCreated", expression = "java(java.time.Instant.now())")
    @Mapping(target = "testQuizz", source = "testQuizz")
    Question map(QuestionDTO questionDTO, TestQuizz testQuizz);


    @Mapping(target = "testQuizzId", expression = "java(question.getTestQuizz().getId())")
    QuestionDTO mapToDTO(Question question);


}
