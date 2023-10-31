package com.example.KDT9Example.dto;

import lombok.Getter;
import lombok.Setter;

public class UserDTO {
    private String name;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // lombok 활용하여 게터 세터 만들기
    // 클래스위에 작성하면 클래스 안에 있는 모든 변수들의 게터 세터가 만들어짐
//    @Getter
//    @Setter
    private String age;

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "name='" + name + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}
