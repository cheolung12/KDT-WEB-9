package com.example.jpaprac.repository;

import com.example.jpaprac.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    BoardEntity findByAuthor(String author);
}
