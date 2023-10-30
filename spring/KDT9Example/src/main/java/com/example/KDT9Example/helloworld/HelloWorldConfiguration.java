package com.example.KDT9Example.helloworld;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

// record: getter, setter, 생성자 등을 자동으로 설정
record Person(String name, int age){};

record Address(String address, int postCode) {};

record Infomation(String name, int age, Address address){}

// Configuration: 빈 정의를 포함하는 클래스
@Configuration
public class HelloWorldConfiguration {

    @Bean
    public String name() {
        return "KDT9";
    }

    @Bean
    public int age() {
        return 25;
    }

    @Bean
    public Person person() {
        return new Person("Tom", 23);
    }

    // Bean 재사용하기
   @Bean
    public Person person2() {
        return new Person(name(), age());
    }

    // 빈의 이름을 직접 지정
    // 빈의 이름을 지정함으로써 더 명시적이고 이해하기 쉬운 코드를 작성할 수 있으며, 빈의 이름이 변경되더라도 다른 부분의 코드에 영향을 주지 않도록 할 수 있다.
   @Bean(name="myAddress")
    public Address address() {
        return new Address("Seoul Mapo", 12345);
    }

    @Bean
    @Primary
    public Infomation info(String name, int age, Address myAddress) {
        return new Infomation(name, age, myAddress);
    }

    @Bean
    @Primary // Address.class했을때 여러개가있어서 이걸로 받아오기 위해
    public Address address2() {
        return new Address("Seoul Gangdong", 45678);
    }

    @Bean
    @Qualifier("addressQualifier")  // 한정자 사용
    public Address address3() {
        return new Address("Seoul Seodaemoon", 33333 );
    }

    @Bean
    public Infomation info2(String name, int age,  @Qualifier("addressQualifier")Address myAddress) {
        return new Infomation(name, age, myAddress);
    }
}
