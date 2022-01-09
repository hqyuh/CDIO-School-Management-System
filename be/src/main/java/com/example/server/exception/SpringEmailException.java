package com.example.server.exception;

public class SpringEmailException extends RuntimeException{
    public SpringEmailException(String message, Exception exception) {
        super(message, exception);
    }

    public SpringEmailException(String message) {
        super(message);
    }
}
