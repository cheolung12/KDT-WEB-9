const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser")
const session = require("express-session");

app.set('view engine', 'ejs');

app.use(cookieParser());

const cookieConfig =  {
    httpOnly: true,
    maxAge: 60 * 1000,  
};

app.get('/', (req, res) => {
    // 쿠키 받기
    console.log(req.cookies.modal);
    res.render('cookie', {popup: req.cookies.modal});
});

app.post('/setCookie', (req, res) => {
    res.cookie('modal', 'hide', cookieConfig);
    res.send({result: true, msg: '쿠키 생성 완료'});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});


