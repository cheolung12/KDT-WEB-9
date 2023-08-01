const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//view engine`
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get('/', (req, res)=> {
    res.render('index', {
        title: '폼 전송 실습',
    });
})
app.get('/getForm', (req, res)=> {
    console.log(req.query);  // get은 쿼리
    res.render('result', {
        title: "GET 요청 폼 결과 확인하기",
        userInfo: req.query,
    })
})

app.post('/postForm', (req, res) => {
    console.log(req.body);  // post는 body (사실 상 get 말고는 다 body)
    res.render('result', {
        title: "POST 요청 폼 결과 확인하기",
        userInfo: req.body,
    })
})

//서버 열기
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
