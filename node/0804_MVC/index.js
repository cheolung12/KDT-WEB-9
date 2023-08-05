const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloWorld',
        date: '2023-08-01',
        comment: '안녕하세요',
    },
    {
        id: 2,
        userId: 'aaa',
        date: '2023-09-23',
        comment: '반갑습니다',
    },
    {
        id: 3,
        userId: 'bbb',
        date: '2023-07-07',
        comment: '행복하세요',
    },
    {
        id: 4,
        userId: 'ccc',
        date: '2023-12-10',
        comment: '집가고싶어요',
    },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
    res.render('comments', {commentInfos: comments});
})

// : 을 활용하여 params 표현
// :뒤에 있는 값이 params의 key 값으로 들어간다
app.get("/comment/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId-1]);
    res.render('comment', { commentInfo: comments[commentId - 1]})
})

// 에러처리 : 마지막에 선언해야함  (* 사용하니까)
app.get('*', (req, res)=>{
    res.render('404');
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
