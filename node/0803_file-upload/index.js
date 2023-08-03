const express = require("express");
const multer = require("multer");
const path = require("path"); // 익스프레스 내장 객체 : 경로 설정 및 제어
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적파일 설정
// app.use('/uploads', express.static(__dirname + '/uploads'));

// multer 설정 (위치: 상단)
const upload = multer({
  dest: "uploads/", // 업로드할 파일을 저장할 경로 지정, 상대경로도 가능
});

// 세부설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  // done(에러처리, )
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // 확장자명 저장 (ex) .png)
      const ext = path.extname(file.originalname);
      console.log("ext", ext);
      // 확장자가 없어진 원래 이름 + 현재 타임스탬프값 + 확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

// 싱글 업로드
app.post("/upload", uploadDetail.single("userFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

// 멀티 업로드(1)
app.post("/upload/array", uploadDetail.array("userFiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

// 멀티 업로드(2)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userFile1" }, { name: "userFile2" }]),  // key는 무조건 name
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

// 동적 업로드
app.post("/dynamicFile", uploadDetail.single('dynamic-file'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
