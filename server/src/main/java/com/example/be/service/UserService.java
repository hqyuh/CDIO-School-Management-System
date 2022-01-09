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
    private final AuthService authService;

    @Autowired
    public UserService(UserRepository repo,
                       MailService mailService,
                       PasswordEncoder passwordEncoder, AuthService authService) {
        this.repo = repo;
        this.mailService = mailService;
        this.passwordEncoder = passwordEncoder;
        this.authService = authService;
    }

    public List<User> getAllUser() {
        return repo.findAll();
    }

    public User getUserByUsername(String username) {
        return repo.findByUsername(username);
    }

    public User addNewUser(User user) {
        user.setUsername(user.getUsername());
        user.setFullName(user.getFullName());
        user.setEmail(user.getEmail());
        String password = generatePassword();
        user.setPassword(encodePassword(password));
        user.setRole(user.getRole());
        user.setEnabled(true);
        user.setPosition(user.getPosition());
        user.setCreated(Instant.now());
        repo.save(user);
        mailService.sentMail(new NotificationEmail("DTU Quizz - Password", user.getEmail(),
                        "This is your password: " + password));

        return user;
    }

    public User updateUser(User user) {
        user.setUsername(user.getUsername());
        user.setFullName(user.getFullName());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setRole(user.getRole());
        user.setEnabled(user.isEnabled());
        user.setPosition(user.getPosition());
        user.setCreated(Instant.now());
        repo.save(user);
        return user;
    }

    private String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }

    private String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(6);
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

    public User editProfile() {
        return authService.getCurrentUser();
    }

}
