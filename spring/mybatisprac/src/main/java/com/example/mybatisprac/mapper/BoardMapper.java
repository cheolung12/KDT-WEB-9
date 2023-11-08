package com.example.mybatisprac.mapper;

import com.example.mybatisprac.domain.Board;
import com.example.mybatisprac.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> getBoardAll();
    void insertBoard(Board board);
    List<Board> searchBoard(String word);
    void patchBoard(BoardDTO boardDTO);
    void deleteBoard(int id);
}
