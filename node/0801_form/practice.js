const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', (req, res)=> {
    res.render('practice');
})

// app.get('/getForm', (req, res)=> {
//     console.log(req.query);  
//     res.render('practice_result', {
//         title: "GET 요청 폼 결과 확인하기",
//         userInfo: req.query,
//     })
// })

app.post('/postForm', (req, res) => {
    console.log(req.body);  
    res.render('practice_result', {
        title: "POST 요청 폼 결과 확인하기",
        userInfo: req.body,
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
