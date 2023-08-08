const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 메인
router.get("/user", controller.main);
// 회원가입 폼
router.get("/user/signup", controller.signup);
// 회원가입 버튼 클릭
router.post("/user/signup", controller.postSignUp);
// 로그인 폼
router.get("/user/signin", controller.signin);
// 로그인 버튼 클릭
router.post("/user/signin", controller.postSignIn);
// 로그인 성공 시
router.post("/user/profile", controller.profile);

router.post("/user/profile/edit", controller.edit);

router.post("/user/profile/delete", controller.delete);
module.exports = router;
