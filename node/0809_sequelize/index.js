const express = require("express");
const app = express();
const PORT = 8000;

const db = require("./models/");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
// const indexRouter = require('./routes');
// app.use('/', indexRouter);
const visitorRouter = require("./routes/visitor");
app.get("/", (req, res) => {
  res.render("index");
});
//localhost:8000/visitor
app.use("/visitor", visitorRouter);

app.use("*", (req, res) => {
  res.render("404");
});

// force: false => 이름이 같을 때 테이블이 있으면 넘어가고 없으면 생성
// true => 테이블이 있으면 있는거 지우고 생성
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});


