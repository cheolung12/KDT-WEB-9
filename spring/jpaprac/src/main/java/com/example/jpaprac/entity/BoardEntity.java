package com.example.jpaprac.entity;

import com.example.jpaprac.dto.BoardDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "board")
public class BoardEntity {

    @Id
    @GeneratedValue
    private int id;

    @Column(length = 32, nullable = false)
    private String author;

    @Column(length = 127, nullable = false)
    private String title;

    @Column(length = 1200, nullable = false)
    private String content;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    public BoardEntity(String author, String title, String content) {
        this.author = author;
        this.title = title;
        this.content = content;
    }


    // id랑 타임스탬프 2개는 미리 만들어놓고 상속받는 방식으로 자주 씀
}
