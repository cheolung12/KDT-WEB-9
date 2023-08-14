const express = require("express");
const app = express();
const PORT = 8000;
const jwt = require("jsonwebtoken");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const secret = 'qqq';

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    // 원래는 pw 넣으면 안됨
    const { id, pw } = req.body;
    // jwt 생성
    // sign함수의 매개변수들을 조합해 토큰을 생성
    const token = jwt.sign({id}, secret);
    res.send({result: true, token});
});

// jwt 토큰을 헤더에 넣어서 post
app.post('/verify', (req,res) => {
    console.log(req.headers);
    const auth = req.headers.authorization;
    const token = auth.split(' ');
    if(token[0] === 'Bearer'){
        // jwt 검증
        // 검증 과정은 글로벌 함수로 만들어넣고 계속 쓰면된다.
        jwt.verify(token[1], secret, (err, decoded) => {
            if(err){
                return res.status(403).send({ msg: '검증실패'});
            }
            res.send({user: decoded});
        });
        console.log(verify);
       
    }else{
        res.send({ msg: '잘못된 인증방식 입니다'});
    }
    
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
