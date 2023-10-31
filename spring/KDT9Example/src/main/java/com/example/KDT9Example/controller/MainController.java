package com.example.KDT9Example.controller;

import com.example.KDT9Example.dto.UserDTO;
import com.example.KDT9Example.vo.PracticeVO;
import com.example.KDT9Example.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {

    @GetMapping("/")
    public String getMain() {
        return "practiceForm";
    }

    // 쿼리스트링 받기
    // /get/response1?name=abc
    // 기본값으로 required=true를 갖기 때문에 ?name=을 필수로 보내줘야 한다.
    @GetMapping("/get/response1")
    public String getResponse1(@RequestParam(value="name") String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    // required: false  => ? 뒤에 키값이 없어도 동작
    @GetMapping("/get/response2")
    public String getResponse2(@RequestParam(value="name", required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getResponse3(@PathVariable String name, @PathVariable("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    // PathVariable도 required의 기본값이 true이다.
    // GetMapping에 두개이상 url 할당 가능
    // 필수가 포함되어 있는 url이 앞에 있는게 좋다
    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    public String getResponse4(@PathVariable String name, @PathVariable(required = false) String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @GetMapping("/introduce/{name}")
    public String Practice1(@PathVariable(value="name") String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/introduce2")
    public String Practice2(@RequestParam(value="name") String name, @RequestParam(value="age") String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    // @RequestBody: 전달받은 body 데이터를 json 형태의 객체로 만들어준다.
    @PostMapping("/post/response1")
    public String postResponse1(@RequestBody String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postResponse2(@RequestBody(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody   // response 데이터를 전달한다. (res.send) 뷰를 활용하지 않음
    public String postResponse3(@RequestBody(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }


    @GetMapping("/dto/response1")
    @ResponseBody
    // DTO 앞에 어노테이션을 붙이지 않았다면 @ModelAttribute가 자동으로 실행된다.
    // @ModelAttribute: 생략 가능, html 폼 데이터를 컨트롤러로 전달할 때 객체에 매핑해주는 친구
    // 매핑: 같은 이름끼리 set함수를 실행
    // 프론트에서 name, age 보내면 name, age로 매핑
    public String dtoResponse1(UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }

    //  get방식으로  전달하고 @RequestBody로 받으면 오류
    // 요청의 본문에 있는 데이터 (body)값을 가져오기때문에 post쓸 때 해야됨
    @GetMapping("/dto/response11")
    @ResponseBody
    public String dtoResponse11(@RequestBody UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }

    // 일반 폼전송 - DTO
    // 아무것도 적지 않고 DTO로 받으면 -> 받아짐
    // @ModelAttribute DTO로 받으면 -> 받아짐
    // @RequestBody DTO로 받으면 -> 오류

    // @RequestBody는 요청 본문에 있는 데이터를 받아서 객체에 매핑 단, 전달받은 요청의 데이터 형식이 json또는 xml일때만 실행 가능
    // 일반폼으로 전송을하게되면 -> www-x-form-urlencoded
    // 그래서 안됨

//    @GetMapping("/vo/response1")
//    @ResponseBody
//    public String voResponse1(@ModelAttribute UserVO userVO){
//        // @ModelAttribute를 이용하면 객체의 set함수를 이용해 값을 넣어준다. -> VO에는 set함수 없어서 오류
//        String msg = userVO.getName() + " " + userVO.getAge();
//        return msg;
//    }
//
//    @PostMapping("/vo/response2")
//    @ResponseBody
//    public String voResponse2(UserVO userVO){
//        String msg = userVO.getName() + " " + userVO.getAge();
//        return msg;
//    }
//
//    @PostMapping("/vo/response3")
//    @ResponseBody
//    public String voResponse3(@RequestBody UserVO userVO){
//        String msg = userVO.getName() + " " + userVO.getAge();
//        return msg;
//    }


    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosResponse1(@RequestParam String name, @RequestParam String age){
        // axios get 전송일때 @RequestParam으로 값을 전달 받을 수 있다.
        String msg = "이름: " + name + ", 나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosResponse2(UserDTO userDTO){
        // axios get 전송일때 @ModelAttribute으로 값을 전달받을 수 있다. ( => set 함수가 있는 객체)
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }


    // ModelAttrubute와 RequestParam의 특징때문
    // 기본적으로 일반폼 전송을 할때 파라미터로 형태로 들어옴 (key, value 쿼리스트링 형태)-> 그래서 RequestParam으로 읽을 수 있음
    // axios로 보내면 파라미터가인 json으로 값이 들어옴

    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosResponse3(@RequestParam String name, @RequestParam String age){
        // axios Post를 RequestParam으로 받을 수 없다.
        String msg = "이름: " + name + ", 나이 : " + age;
        return msg;
    }

    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosResponse4(UserDTO userDTO){
        // null이 들어옴
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosResponse5(@RequestBody UserDTO userDTO){

        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }



    // null
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoResponse2(UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }


    // null
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoResponse4(UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }


    @PostMapping("/axios/vo/response5")
    @ResponseBody
    // @ModelAttribute의 경우 우리가 만든 set함수를 이용하지만
    // @RequestBody는 setter함수가 아닌 각각의 필드에 직접적으로 값을 주입하면서 매핑
    // -> 그래서 set함수가 없는 VO여도 가능하다.
    public String axiosVoResponse5(@RequestBody UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }


    @PostMapping("/practice/post")
    @ResponseBody
    public String Practice(@RequestBody PracticeVO practiceVO) {

        String msg = practiceVO.getName() + " " + practiceVO.getGender();
        return msg;
    }
}
