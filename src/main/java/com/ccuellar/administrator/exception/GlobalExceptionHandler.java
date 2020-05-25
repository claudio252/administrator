package com.ccuellar.administrator.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.*;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler({ TransactionSystemException.class })
    public ResponseEntity<?> handleConstraintViolation(Exception ex, WebRequest request) {
        Throwable cause = ((TransactionSystemException) ex).getRootCause();
        final List<Object> errors = new ArrayList<>();
        if (cause instanceof ConstraintViolationException) {
            Set<ConstraintViolation<?>> constraintViolations = ((ConstraintViolationException) cause).getConstraintViolations();
            constraintViolations.stream().forEach(fieldError -> {
                Map<String, Object> error = new HashMap<>();
                error.put("path", String.valueOf(fieldError.getPropertyPath()));
                error.put("message", fieldError.getMessage());
                errors.add(error);
            });
        } else {
            errors.add(ex.getMessage());
        }
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
        Map<String, Object> body = new HashMap<>();
        body.put("error", errors);

        return new ResponseEntity<>(body, httpStatus);
    }
}
