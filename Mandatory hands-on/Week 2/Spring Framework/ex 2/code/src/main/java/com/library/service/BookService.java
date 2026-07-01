package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    // Setter Injection
    public void setRepository(BookRepository repository) {
        this.repository = repository;
        System.out.println("BookRepository injected into BookService using Setter Injection.");
    }

    public void displayService() {

        System.out.println("BookService Bean Created");
        System.out.println("Library Management Application Started");

        repository.displayRepository();

        System.out.println("Dependency Injection Verified Successfully.");
    }
}