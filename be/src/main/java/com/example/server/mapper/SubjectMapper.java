package com.example.server.mapper;

import com.example.server.dto.SubjectDTO;
import com.example.server.model.Subject;
import com.example.server.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface SubjectMapper {

    SubjectMapper INSTANCE = Mappers.getMapper(SubjectMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "name", ignore = true)
    @Mapping(target = "dateCreated", expression = "java(java.time.Instant.now())")
    @Mapping(target = "user", source = "user")
    Subject map(SubjectDTO subjectDTO, User user);

    @Mapping(target = "userId", expression = "java(subject.getUser().getId())")
    SubjectDTO mapToDTO(Subject subject);

}
