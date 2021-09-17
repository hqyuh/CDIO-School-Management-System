package com.example.be.service;

import com.example.be.dto.AuthenticationResponse;
import com.example.be.dto.LoginRequest;
import com.example.be.dto.RegisterRequest;
import com.example.be.exception.SpringEmailException;
import com.example.be.model.NotificationEmail;
import com.example.be.model.User;
import com.example.be.model.VerificationToken;
import com.example.be.repository.UserRepository;
import com.example.be.repository.VerificationTokenRepository;
import com.example.be.security.JwtProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.*;
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

        userRepository.save(user);

        String token = generateVerificationToken(user);
        mailService.sentMail(
                new NotificationEmail("Please activate your Account" ,
                        user.getEmail(),
                        "Thank you for signing up to Quizz. please click on the below url to activate your account \n" +
                                "http://localhost:8080/api/auth/accountVerification/" + token)
        );

    }

    public AuthenticationResponse login(LoginRequest loginRequest){
        Authentication authenticate = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                   loginRequest.getEmail(),
                   loginRequest.getPassword()
                ));
        SecurityContextHolder.getContext().setAuthentication(authenticate);

        String token = jwtProvider.generateToken(authenticate);
        return new AuthenticationResponse(token, loginRequest.getEmail());
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
        Long userId = verificationToken.getUser().getUserId();
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

}
