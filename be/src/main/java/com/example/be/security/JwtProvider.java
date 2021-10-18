package com.example.be.security;

import com.example.be.exception.SpringEmailException;
import com.example.be.model.CustomUserDetail;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.cert.CertificateException;
import java.util.Date;

import static io.jsonwebtoken.Jwts.parser;

@Service
public class JwtProvider {

    private KeyStore keyStore;

    @PostConstruct
    public void init(){
        try {
            keyStore = KeyStore.getInstance("JKS");
            InputStream resourceAsStream = getClass().getResourceAsStream("/springblog.jks");
            keyStore.load(resourceAsStream, "secret".toCharArray());
        } catch (KeyStoreException | NoSuchAlgorithmException | CertificateException | IOException e) {
            throw new SpringEmailException("Exception occurred while loading keystore ", e);
        }
    }


    public String generateToken(CustomUserDetail authentication){
        // User principal = (User) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(authentication.getUsername())
                .setIssuedAt(new Date())
                .signWith(getPrivateKey())
                .compact();
    }

    private PrivateKey getPrivateKey(){
        try{
            return (PrivateKey) keyStore.getKey("springblog", "secret".toCharArray());
        }catch (KeyStoreException | NoSuchAlgorithmException | UnrecoverableKeyException e){
            throw new SpringEmailException("Exception occurred while retrieving public key from keystore " + e);
        }
    }

    // validate
    public boolean validateToken(String jwt){
        parser().setSigningKey(getPrivateKey()).parseClaimsJws(jwt);
        return true;
    }

    private PublicKey getPublicKey(){

        try{
            return keyStore.getCertificate("springblog").getPublicKey();
        }catch (KeyStoreException e){
            throw new SpringEmailException("Exception occurred while retrieving public key from keystore", e);
        }

    }

    // get user from jwt
    public String getUsernameFromJwt(String token){
        Claims claims  = parser()
                .setSigningKey(getPublicKey())
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

}
