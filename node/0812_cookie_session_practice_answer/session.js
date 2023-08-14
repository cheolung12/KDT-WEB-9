const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

const userInfo = {id: 'kdt9', pw: '1234'};

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    name: 'session_prac',
    cookie: {
        maxAge: 60 * 1000,
        httpOnly: true,
    }
}));

app.get('/' , (req, res) => {
    console.log(req.session);
    const user = req.session.user;
    console.log(`user: ${user}`);
    if(user === undefined)
        res.render('session', { isLogin: false });
    else
        res.render('session', {isLogin: true, user});
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    // 로그인 성공
    if(req.body.id === userInfo.id && req.body.pw === userInfo.pw){
        req.session.user = req.body.id
        res.redirect('/');
    } else {
        res.send(`<script>alert('로그인실패'); document.location.href='/';</script>`)
    }

});

app.get('/logout', (req, res) => {
    const user = req.session.user;
    if(user === undefined){
        res.send(`<script>alert('잘못된 접근입니다.'); document.location.href= '/';</script>`)
    } else {
        req.session.destroy(() => {
            res.clearCookie('session_prac');
            res.redirect('/');
        })
    }
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});





