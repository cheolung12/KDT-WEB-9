package com.example.jdbc.jdbcExample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Component
public class UserCommandRun implements CommandLineRunner {

    @Autowired
    private UserJdbcRepository user;

    @Override
    public void run(String... args) throws Exception {
        user.insert(new Users(1,"홍길동","서울시 마포구"));
        user.insert(new Users(2,"이몽룡","서울시 용산구"));
        user.insert(new Users(3,"임꺽정","서울시 서대문구"));
        user.deleteId(1);

        System.out.println(user.findId(2));
        System.out.println(user.findId(3));
    }
}
