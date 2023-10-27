package com.kdt.kdtspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class PeopleController {
    class Person {
        private int age;
        private String name;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public int getAge() {
            return age;
        }

        public String getName() {
            return name;
        }
    }

    @GetMapping("/people")
    public String getPeople(Model model) {
        List<Person> names = Arrays.asList(
                new Person("kim", 10),
                new Person("lee", 20),
                new Person("hong", 30),
                new Person("park", 40),
                new Person("shin", 50)
        );

        model.addAttribute("each", names);
        return "people";
    }
}
