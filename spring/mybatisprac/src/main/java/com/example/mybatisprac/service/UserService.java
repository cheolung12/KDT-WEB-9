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

    public UserDTO.Response updateUser(int id, UserDTO.Request userDTO) {
        // id 조회
        Optional<UserEntity> target =  userRepository.findById(id);
        // 수정내역 반영해서 엔티티 생성 후 업데이트 하기
        if(target.isPresent()){
            UserEntity updated = UserEntity.builder()
                    .id(id)
                    .name(userDTO.getName())
                    .nickname(userDTO.getNickname())
                    .build();
            userRepository.save(updated);
            // DTO로 반환
            return UserDTO.Response.builder()
                    .id(id)
                    .name(updated.getName())
                    .nickname(updated.getNickname())
                    .build();
        } else {
            log.info("update에러: 해당하는 user가 없습니다.");
            return null;
        }
    }

    // delete
    public UserDTO.Response deleteUser(int id){
        // id 조회
        Optional<UserEntity> target =  userRepository.findById(id);
        // 삭제
        if(target.isPresent()){
            userRepository.deleteById(id);
            return UserDTO.Response.builder()
                    .id(target.get().getId())
                    .name(target.get().getName())
                    .nickname(target.get().getNickname())
                    .build();
        }else {
            log.info("delete에러: 해당하는 user가 없습니다.");
            return null;
        }
    }

    // 사용자 이름과 일치하거나 닉네임과 일치할경우 조회
    public int searchNameOrNickname(String word) {
        List<UserEntity> result = userRepository.findByNameOrNickname(word, word);
        return result.size();
    }

    // 이름이 존재하는지 조회
    public boolean checkUser(String name) {
        return userRepository.existsByName(name);
    }
}


