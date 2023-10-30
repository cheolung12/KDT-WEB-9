package com.example.KDT9Example.helloworld;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class HelloWorld {
    public static void main(String[] args) {

        // Bean 가져오기 (의존성 주입)
        // 스프링 컨텍스트를 실행하는 단계
        var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);

        // 스프링 프레임워크가 관리하도록 설정
        // 스프링에서 관리하는것은 무엇이든 Bean 이 될 수 있다.
        System.out.println(context.getBean("name"));

        var age = context.getBean("age");
        System.out.println(age);

        System.out.println(context.getBean("person"));

        System.out.println(context.getBean("person2"));

        System.out.println(context.getBean("myAddress"));

        System.out.println(context.getBean("info"));

        // 이렇게 쓰는 경우가 더 많음
        System.out.println(context.getBean(Address.class));
        System.out.println(context.getBean(Infomation.class));

        // 한정자 사용
        System.out.println(context.getBean("info2"));
    }
}
