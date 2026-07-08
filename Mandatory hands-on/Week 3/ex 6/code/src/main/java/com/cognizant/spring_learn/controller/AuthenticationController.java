package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("Start");

        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);

        LOGGER.debug("Authenticated User: {}", user);

        String token = generateJwt(user);

        Map<String, String> map = new HashMap<>();
        map.put("token", token);

        LOGGER.info("End");

        return map;
    }

    private String getUser(String authHeader) {

        LOGGER.info("Start");

        String encodedCredentials = authHeader.substring(6);

        LOGGER.debug("Encoded Credentials: {}", encodedCredentials);

        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        LOGGER.debug("Decoded Credentials: {}", credentials);

        String user = credentials.substring(0, credentials.indexOf(":"));

        LOGGER.debug("User: {}", user);

        LOGGER.info("End");

        return user;
    }

    private String generateJwt(String user) {

        LOGGER.info("Start");

        SecretKey key = Keys.hmacShaKeyFor(
                "mysecretkeymysecretkeymysecretkey12".getBytes(StandardCharsets.UTF_8));

        String token = Jwts.builder()
                .subject(user)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1200000))
                .signWith(key)
                .compact();

        LOGGER.debug("Generated Token: {}", token);

        LOGGER.info("End");

        return token;
    }
}