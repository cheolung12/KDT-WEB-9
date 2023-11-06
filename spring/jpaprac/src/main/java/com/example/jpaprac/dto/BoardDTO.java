package com.example.jpaprac.dto;

import com.example.jpaprac.entity.BoardEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class BoardDTO {
    private int id;
    private String author;
    private String title;
    private String content;


    public BoardEntity toEntity() {
        return new BoardEntity(this.author, this.title, this.content);
    }

    public static BoardDTO toDTO(BoardEntity Board) {
        return new BoardDTO(
                Board.getId(),
                Board.getAuthor(),
                Board.getTitle(),
                Board.getContent()
        );
    }
}
