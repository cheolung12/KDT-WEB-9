const express = require('express');
// import express from 'express';

// 객체 생성
const app = express();
const PORT = 8000;

// set: 서버의 속성을 지정, 코드의 상단부에 작성
// view engine의 속성을 ejs로 지정
app.set('view engine', 'ejs');
// views 폴더 안에 view 경로 지정
app.set('views', './views');

// 정적인 파일 불러오기 (미들웨어)
// 해당 폴더에대해서만 접근을 허용하기위해 사용
//'/public': 이 부분은 미들웨어가 동작할 경로를 지정합니다. 즉, 클라이언트가 "/public"으로 시작하는 경로로 요청을 보낼 때 해당 미들웨어가 동작하게 됩니다.
// express.static('./public'): Express.js에서 제공하는 기본적인 정적 파일 제공 미들웨어입니다. 이 부분은 정적 파일이 위치한 디렉토리를 지정하는 역할을 합니다.
app.use('/public', express.static('./public'))


// get으로 통신 
// '/' = 'localhost:8000/' 
// req: client가 보냄, res: server가 보냄
app.get('/', (req, res) => {
    // res.send({
    //     result: true,
    //     code: 1000,
    //     message: "회원가입 성공"
    // })

    // render: view엔진 렌더링
    // ejs파일을 view로 지정
    // 매개변수: 파일명, 보낼데이터
    res.render('test');
    res.render('test', {name: "철웅"});
});

// listen: 서버를 열어줌
// 콜백함수는 보통 서버를 제대로 열었는지 체크하는 용도로 사용
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


// 템플릿엔진: js코드를 쓸 수 있는 html 파일 -> 테스트 용도로 사용 약간 Jsx느낌
// import, require처럼 모듈을 불러서 사용하는게 아님 위에 set코드 참고

