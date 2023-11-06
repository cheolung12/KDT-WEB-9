package com.example.jpaprac.controller;

import com.example.jpaprac.dto.BoardDTO;
import com.example.jpaprac.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    // 생성
    @PostMapping("/register")
    public BoardDTO postRegister(@RequestBody BoardDTO boardDTO) {
        BoardDTO created = boardService.createPost(boardDTO);
        return created;
    }

    // 조회

    // 수정

    // 삭제
}
