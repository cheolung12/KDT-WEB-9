//package com.example.mybatisprac.controller;
//
//import com.example.mybatisprac.domain.Board;
//import com.example.mybatisprac.dto.BoardDTO;
//import com.example.mybatisprac.service.BoardService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@Controller
//public class BoardController {
//
//    @Autowired
//    private BoardService boardService;
//
//    @GetMapping("/board")
//    public String getBoard(Model model) {
//        List<BoardDTO> list = boardService.getBoardAll();
//        model.addAttribute("list", list);
//        return "board";
//    }
//
//    // select -> 조건에 따라 다른 결과를 return 하도록
//    @GetMapping("/board/search")
//    @ResponseBody
//    public int searchBoard(@RequestParam String word, Model model) {
//        return boardService.searchBoard(word);
//    }
//
//    @PostMapping("/board")
//    @ResponseBody
//    // 마이바티스에서는 dto든 도메인이든 같아서 뭐로 받든 상관 x
//    public void insertBoard(@RequestBody Board board) {
//        // 게시글 작성
//        boardService.insertBoard(board);
//    }
//
//    @PatchMapping("/board")
//    @ResponseBody
//    public void patchBoard(@RequestBody BoardDTO boardDTO) {
//        boardService.patchBoard(boardDTO);
//    }
//
//    @DeleteMapping("/board")
//    public void deleteBoard(@RequestParam int id) {
//        boardService.deleteBoard(id);
//    }
//}
