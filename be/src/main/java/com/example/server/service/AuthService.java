package com.example.server.service;

import com.example.server.dto.AuthenticationResponse;
import com.example.server.dto.LoginRequest;
import com.example.server.dto.RegisterRequest;
import com.example.server.exception.SpringEmailException;
import com.example.server.model.CustomUserDetail;
import com.example.server.model.NotificationEmail;
import com.example.server.model.User;
import com.example.server.model.VerificationToken;
import com.example.server.repository.UserRepository;
import com.example.server.repository.VerificationTokenRepository;
import com.example.server.security.JwtProvider;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;
    private final MailService mailService;
    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;

    @Transactional
    public void signup(RegisterRequest registerRequest){
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(encryptPassword(registerRequest.getPassword()));
        user.setCreated(Instant.now());
        user.setEnabled(false);
        user.setRole(registerRequest.getRole());

        userRepository.save(user);

        String token = generateVerificationToken(user);
        mailService.sentMail(
                new NotificationEmail("Please activate your Account" , user.getEmail(),
                        "Thank you for signing up to Quizz. please click on the below url to activate your account \n" +
                                "http://localhost:8080/api/auth/accountVerification/" + token)
        );

    }

    public AuthenticationResponse login(LoginRequest loginRequest){
        Authentication authenticate = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                   loginRequest.getUsername(),
                   loginRequest.getPassword()
                ));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        CustomUserDetail userDetail = (CustomUserDetail) authenticate.getPrincipal();
        String role = String.valueOf(userDetail.getAuthorities());

        String token = jwtProvider.generateToken((CustomUserDetail) authenticate.getPrincipal());
        return new AuthenticationResponse(token, loginRequest.getUsername(), role);
    }

    // create verification token
    private String generateVerificationToken(User user){
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setExpiryDate(Instant.now());
        verificationToken.setUser(user);

        verificationTokenRepository.save(verificationToken);

        return token;
    }

    private String encryptPassword(String password){
        return passwordEncoder.encode(password);
    }

    @Transactional
    public void fetchUserAndEnabled(VerificationToken verificationToken){
        Long userId = verificationToken.getUser().getId();
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new SpringEmailException("User not found with id " + userId));

        user.setEnabled(true);
        userRepository.save(user);
    }

    // find token
    public void verifyAccount(String token){
        Optional<VerificationToken> verificationToken = verificationTokenRepository.findByToken(token);
        verificationToken.orElseThrow(() -> new SpringEmailException("Invalid Token"));

        fetchUserAndEnabled(verificationToken.get());
    }

    public User getCurrentUser(){
        CustomUserDetail principal = (CustomUserDetail)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userRepository.findByUsername(principal.getUsername());
                // .orElseThrow(() -> new UsernameNotFoundException("Username not found " + principal.getUsername()));
    }

    private String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(6);
    }

    /**
     * Reset password
     * */
    public void resetPassword(String email) {
        User user = userRepository.getUserByEmail(email);
        if(user == null) {
            throw new SpringEmailException("Not found by email " + email);
        }
        String password = generatePassword();
        user.setPassword(encryptPassword(password));
        userRepository.save(user);
        mailService.sentMail(
                new NotificationEmail("DTU Quizz - Reset Password", user.getEmail(),
                        "This is your password: " + password));
    }

}
