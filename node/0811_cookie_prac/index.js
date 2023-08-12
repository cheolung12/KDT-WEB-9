const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 쿠키파서 사용 (일반 쿠키)
app.use(cookieParser())

// 옵션객체 생성
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000, // 1분
};

app.get('/', (req, res) => {
    res.render('index', { data: req.cookies });
});

app.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.stop === 'true'){
        res.cookie('myCookie', 'myValue', cookieConfig);
        res.send({data: true});
    }
    res.send({result: false});
});

// app.get('/clearCookie', (req, res) => {
//     res.clearCookie('myCookie', 'myValue', cookieConfig);
//     res.send('clear cookie');
// });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

