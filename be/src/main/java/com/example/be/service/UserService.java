package com.example.be.service;

import com.example.be.model.NotificationEmail;
import com.example.be.model.User;
import com.example.be.repository.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Instant;
import java.util.List;

@Service
@Transactional
public class UserService {

    private final UserRepository repo;
    private final MailService mailService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository repo,
                       MailService mailService,
                       PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.mailService = mailService;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUser() {
        return repo.findAll();
    }

    public User getUserByUsername(String username) {
        return repo.findByUsername(username);
    }

    public User addUser(User user) {
        String password = generatePassword();
        user.setPassword(encodePassword(password));
        user.setEnabled(true);
        user.setCreated(Instant.now());
        mailService.sentMail(
                new NotificationEmail("DTU Quizz - Password", user.getEmail(),
                        "This is your password: " + password));
        return repo.save(user);
    }

    private String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }

    private String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(6);
    }

    public User updateUser(User user) {
        user.setCreated(Instant.now());
        user.setPassword(encodePassword(user.getPassword()));
        return repo.save(user);
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }

    /**
     * Hàm này sẽ kích hoạt
     *      -> true là mở tài khoản
     *      -> false là khóa tài khoản
    * */
    public void updateUserEnabledStatus(Long id, boolean enabled) {
        repo.updateEnabledStatus(id, enabled);
    }

}
