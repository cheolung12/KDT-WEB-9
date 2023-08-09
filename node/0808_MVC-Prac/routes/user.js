const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 메인
router.get("/", controller.main);
// 회원가입 폼
router.get("/signup", controller.signup);
// 회원가입 버튼 클릭
router.post("/signup", controller.postSignUp);
// 로그인 폼
router.get("/signin", controller.signin);
// 로그인 버튼 클릭
router.post("/signin", controller.postSignIn);
// 로그인 성공 시
router.post("/profile", controller.profile);

router.post("/profile/edit", controller.edit);

router.post("/profile/delete", controller.delete);
module.exports = router;
