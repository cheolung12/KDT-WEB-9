package com.kdt.kdtspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller  // 정보를 받아서 뷰에게 전달
public class HelloController {
    class Hello {
        private int age;
        private String name;

        public Hello(String name, int age) {
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

    @GetMapping("/hi") // router (get 요청)
    public String getHi(Model model) {  // Model model: 컨트롤러 클래스안의 메서드가 파라미터로 받을 수 있는 객체

        Hello hello = new Hello("철웅", 27);
        List<String> names = Arrays.asList("kim", "lee", "hong", "park");
        model.addAttribute("text", "text");
        model.addAttribute("uText", "<b>u-text</b>");
        model.addAttribute("value", "플레이스홀더");
        model.addAttribute("with", "hello");
        model.addAttribute("href", "https://velog.io/@cu1210/Spring-%EC%9E%85%EB%AC%B8-1-7h9b3tsh");
        model.addAttribute("img", "naver.png");
        model.addAttribute("case", "admin");
        model.addAttribute("each", names);
        model.addAttribute("classHello", hello);
        return "hi";
    }
}

