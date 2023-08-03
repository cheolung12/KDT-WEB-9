const express = require("express");
const multer = require("multer");
const path = require("path"); // 익스프레스 내장 객체 : 경로 설정 및 제어
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      console.log("ext", ext);
      done(null, file.fieldname + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("practice");
});

app.post("/upload", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render('practice2', {
    file: req.file,
    data: req.body
  })
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
