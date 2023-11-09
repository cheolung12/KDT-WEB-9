package com.example.mybatisprac.controller;

import com.example.mybatisprac.dto.UserDTO;
import com.example.mybatisprac.repository.UserRepository;
import com.example.mybatisprac.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    // create
    @PostMapping("/user/create")
    public UserDTO.Response createUser(@RequestBody UserDTO.Request userDTO) {

        return userService.createUser(userDTO);
    }

    // read (사용자 이름으로 조회)
    @GetMapping("/user/select/{name}")
    public List<UserDTO.Response> selectUser(@PathVariable String name){

        return userService.selectUserByName(name);
    }

    // update
    @PatchMapping("/user/update/{id}")
    public UserDTO.Response updateUser(@RequestBody UserDTO.Request userDTO, @PathVariable int id){

        return userService.updateUser(id, userDTO);
    }

    // delete
    @DeleteMapping("/user/delete/{id}")
    public UserDTO.Response deleteUser(@PathVariable int id){

        return userService.deleteUser(id);
    }


    // + 사용자 이름과 일치하거나 닉네임과 일치할경우 조회
    @GetMapping("/user/search")
    public String findByNameOrNickname(@RequestParam String word){
        int cnt = userService.searchNameOrNickname(word);
        return cnt + "명입니다.";
    }

    // 이름이 존재하는지 조회
    @GetMapping("/user/check")
    public String checkName(@RequestParam String name){
        boolean result = userService.checkUser(name);

        if(result) return "있습니다";
        else return "없습니다";
    }

}
