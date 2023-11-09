package com.example.mybatisprac.repository;

import com.example.mybatisprac.domain.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@Repository
// JpaRepository<관리대상 엔티티, 대표값(PK)의 타입(Wrapper클래스)>: CRUD, paging, sorting등 가능
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    // findBy컬럼명: 해당 컬럼에서 조회해줌 (리스트타입으로)
    // findBy컬럼명And컬럼명: ex) findByNameAndNickname

    List<UserEntity> findByName(String name);
    Optional<UserEntity> findById(int id);

    List<UserEntity> findByNameOrNickname(String name, String nickname);
    // 아래 처럼 쿼리를 사용해도됨
    // @Query(nativeQuery=ture, "select * from user where name=:word or nickname: word")

    // 회원가입할때 아이디나 이메일 중복검사용으로 사용
    boolean existsByName(String name);
}
