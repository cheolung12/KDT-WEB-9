const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signin', (req, res) => {
    res.render('signin');
})

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000,
    }
}));

app.post('/', (req, res) => {
    if(req.body.name !== "")
        req.session.name = req.body.name;
    res.render('result', {
        name: req.session.name,
        session: true,
    });
});


app.get('/destroy', (req, res) => {
    req.session.destroy(() => {   
        res.clearCookie('connect.sid');
        res.redirect('/signin');
    });
    
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});


