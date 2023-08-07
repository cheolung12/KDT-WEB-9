const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/index");
app.use('/', router);

// example: 사용자 관련 라우팅 사용할 때
// const userRouter = require('./routes/user');
// app.use('/user', userRuter);


// 에러처리 : 마지막에 선언해야함  (* 사용하니까)
// get, post, delete등등 다 처리해줘야 하니까 use 사용
app.use('*', (req, res)=>{
    res.render('404');
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
