//package com.example.mybatisprac.service;
//
//import com.example.mybatisprac.domain.Board;
//import com.example.mybatisprac.domain.UserEntity;
//import com.example.mybatisprac.dto.BoardDTO;
//import com.example.mybatisprac.dto.UserDTO;
//import com.example.mybatisprac.mapper.BoardMapper;
//import com.example.mybatisprac.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class BoardService {
//
//    @Autowired
//    private UserRepository userRepository;
//
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
//}
