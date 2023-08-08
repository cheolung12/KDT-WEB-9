const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 방명록 전체 보이기
router.get("/", controller.getVisitors);

// 방명록 하나 조회
router.get("/get", controller.getVisitor);

// 방명록 생성
router.post("/write", controller.createVisitor);

// 방명록 수정
router.patch("/edit", controller.editVisitor);

// 방명록 삭제
router.delete("/delete", controller.deleteVisitor);

module.exports = router;