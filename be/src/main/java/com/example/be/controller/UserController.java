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
    public ResponseEntity<User> addNewUser(@RequestBody User user) {

        User newUser = service.addNewUser(user);
        return new ResponseEntity<>(newUser, CREATED);
    }

    @PatchMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updateUser = service.updateUser(user);
        return new ResponseEntity<>(updateUser, OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        service.deleteUser(id);
        return new ResponseEntity<>(OK);
    }

    @GetMapping("/{id}/enabled/{status}")
    public ResponseEntity<?> updateUserEnabledStatus(@PathVariable("id") Long id,
                                                     @PathVariable("status") String enabled) {
        service.updateUserEnabledStatus(id, Boolean.parseBoolean(enabled));
        return new ResponseEntity<>(OK);
    }

    @GetMapping("/me")
    public ResponseEntity<User> editProfile() {
        User user = service.editProfile();
        return new ResponseEntity<>(user, OK);
    }

}
