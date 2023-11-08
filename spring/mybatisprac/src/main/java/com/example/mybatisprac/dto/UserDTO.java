package com.example.mybatisprac.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
public class UserDTO {

    private int id;
    private String name;
    private String nickname;
    @Getter
    @Builder
    public static class Request {
        private String name;
        private String nickname;

    }

    @Getter
    @Builder
    public static class Response {
        private int id;
        private String name;
        private String nickname;
    }
}