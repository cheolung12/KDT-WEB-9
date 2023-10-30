package com.example.KDT9Example.game;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary  // 충돌방지
public class OW2 implements GameConsole{
    public void up() {
        System.out.println("ow up");
    }
    public void down() {
        System.out.println("ow down");
    }
    public void right() {
        System.out.println("ow right");
    }
    public void left() {
        System.out.println("ow left");
    }
}
