package com.example.be.controller;

import com.example.be.model.User;
import com.example.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity
                .status(OK)
                .body(service.getAllUser());
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        return ResponseEntity
                .status(OK)
                .body(service.getUserByUsername(username));
    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        service.addUser(user);
        return new ResponseEntity<>(CREATED);
    }

    @PatchMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        service.updateUser(user);
        return new ResponseEntity<>(OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        service.deleteUser(id);
        return new ResponseEntity<>(OK);
    }

}
