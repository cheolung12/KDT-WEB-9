package com.example.KDT9Example.game;


import org.springframework.stereotype.Component;

@Component
public class LOLgame implements GameConsole {
    public void up() {
        System.out.println("lol up");
    }
    public void down() {
        System.out.println("lol down");
    }
    public void right() {
        System.out.println("lol right");
    }
    public void left() {
        System.out.println("lol left");
    }
}
