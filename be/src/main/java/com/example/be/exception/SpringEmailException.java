package com.example.be.exception;

public class SpringEmailException extends RuntimeException{
    public SpringEmailException(String message, Exception exception) {
        super(message, exception);
    }
}
