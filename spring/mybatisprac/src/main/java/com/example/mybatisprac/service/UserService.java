package com.example.mybatisprac.service;

import com.example.mybatisprac.domain.Board;
import com.example.mybatisprac.domain.UserEntity;
import com.example.mybatisprac.dto.BoardDTO;
import com.example.mybatisprac.dto.UserDTO;
import com.example.mybatisprac.mapper.BoardMapper;
import com.example.mybatisprac.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    public List<UserDTO> getUserList() {
//        List<UserEntity> result = userRepository.findAll();
//        List<UserDTO> users = new ArrayList<>();
//
//        for(UserEntity user: result) {
//            UserDTO userDTO = UserDTO.builder()
//                    .id(user.getId())
//                    .name(user.getName())
//                    .nickname(user.getNickname())
//                    .build();
//            users.add(userDTO);
//        }
//        return users;
//    }

//    public String searchUser(String name) {
//        List<UserEntity> result = userRepository.findByName(name);
//        for(UserEntity user: result){
//            System.out.println(user.getId() + user.getNickname());
//        }
//        return "";
//    }

//    public String searchId(int id) {

//        // Optional: null일수도 있는 객체를 감싸는 wrapper 객체
//        Optional<UserEntity> result = userRepository.findById(id);
//        if(result.isPresent()){
//            System.out.println(result.get().getName());
//        } else {
//            System.out.println("해당하는 친구 없음");
//        }
//        // optional 함수
//        // isPresent(), isEmpty(), get() 등등
//        // isPresent(): 객체의 여부를 boolean으로 반환
//        // isEmpty(): isPresent()의 반대
//        // get(): 옵셔널 내부의 객체를 반환
//        return "";
//    }

    // create
    public UserDTO.Response createUser(UserDTO.Request userDTO) {

        // DTO -> 엔티티
        UserEntity user = UserEntity.builder()
                .name(userDTO.getName())
                .nickname(userDTO.getNickname())
                .build();
        // DB 저장
            UserEntity created = userRepository.save(user);

        // 엔티티 -> DTO
        return UserDTO.Response.builder()
                .id(created.getId())
                .name(created.getName())
                .nickname(created.getNickname())
                .build();
    }


    public List<UserDTO.Response> selectUserByName(String name) {
        // DB에서 조회
        List<UserEntity> userList = userRepository.findByName(name);

        // 엔티티 -> DTO
        List<UserDTO.Response> result = new ArrayList<>();
        for(UserEntity user: userList){
            result.add(UserDTO.Response.builder()
                    .id(user.getId())
                    .name(user.getName())
                    .nickname(user.getNickname())
                    .build());
        }

        return result;
    }

//    public UserDTO.Response updateUser(int id) {
//        // id 조회
//        Optional<UserEntity> user =  userRepository.findById(id);
//        //
//    }

    // 사용자 이름과 일치하거나 닉네임과 일치할경우 조회
//    public int searchNameOrNickname(String word) {
//        List<UserEntity> result = userRepository.findByNameOrNickName(word, word);
//        return result.size();
//    }
//
//    public boolean checkUser(String name) {
//        return userRepository.existsByName(name);
//    }
}


