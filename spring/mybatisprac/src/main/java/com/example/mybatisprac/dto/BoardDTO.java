package com.example.mybatisprac.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BoardDTO {
    private int id;
    private String title, content, writer, registered;
    private String no;
}
