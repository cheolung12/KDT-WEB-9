package com.example.jpaprac.service;

import com.example.jpaprac.dto.BoardDTO;
import com.example.jpaprac.entity.BoardEntity;
import com.example.jpaprac.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    // 생성
    public BoardDTO createPost(BoardDTO boardDTO) {
        // DTO -> Entity
        BoardEntity board = boardDTO.toEntity();
        // DB에 저장
        BoardEntity created = boardRepository.save(board);
        // 다시 DTO로 변환
        return BoardDTO.toDTO(created);
    }

    // 조회

    // 수정
//    public BoardDTO updatePost(BoardDTO boardDTO){
//        // 조회하기
//        Optional<BoardEntity> target = boardRepository.findById(boardDTO.getId());
//
//        if(target.isPresent()){ // 존재 할때
//            BoardEntity data  = target.get();
//        }
//
//    // 삭제
//
}
