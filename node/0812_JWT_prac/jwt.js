const express = require("express");
const app = express();
const PORT = 8000;
const jwt = require("jsonwebtoken");

const userInfo = {id: 'kdt9', pw: '1234'};
const secret = "secretKey";

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/' , (req, res) => {    
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    // 로그인 성공
    if(req.body.id === userInfo.id && req.body.pw === userInfo.pw){
        const id = req.body.id;
        const token = jwt.sign({id}, secret);
        res.send({result: true, token, id});
    } else {
        res.send({result: false});
    }
});

app.post('/logout', (req, res) => {
    res.send({result: false});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});