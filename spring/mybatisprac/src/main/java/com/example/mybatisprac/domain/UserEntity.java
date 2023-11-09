package com.example.mybatisprac.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity   // NoArgs 생성자 필요
@Table(name="user")
@Getter
@Builder  // AllArgs 생성자 필요
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY) // auto increment
    private int id;
    @Column(name="name", nullable = false, length=20)
    private String name;
    @Column
    private String nickname;  // default: 255

    // ENUM 타입도 선언 가능하다.
    // @Column
    // @Enumerated(EnumType.STRING)
    // private UserType type;

    // public enum UserType {
    //    STUDENT, TEACHER
    //}
}
