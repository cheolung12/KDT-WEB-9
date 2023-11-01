package com.example.mybatis.mybatistest.mapper;

import com.example.mybatis.mybatistest.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {

    // mapper(xml) 참고하기
    List<User> retrieveAll();


    @Insert("INSERT INTO user (name, address) VALUES (#{name} #{address})")
    void insertUser(User user);

}