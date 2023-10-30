package com.example.KDT9Example.game;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


// Configuration: 이제 여기로 들어오는 모든 것들을 빈으로 본다.
@Configuration
@ComponentScan("com.example.KDT9Example.game")  // 이 패키지 안에 있는 컴포넌트들을 스캔한다.
public class GameMain {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(GameMain.class);

        context.getBean(GameConsole.class).up();
        context.getBean(GameEngine.class).run();

        // 결합도: 무엇인가를 변경하는데 얼마난 많은 작업이 관련되어 있는지에 대한 측정
//        OW2 game = new OW2();
//        LOLgame game2 = new LOLgame();

        // 의존성 주입
//        GameEngine engine = new GameEngine(game2);
//
//        engine.run();

    }
}
