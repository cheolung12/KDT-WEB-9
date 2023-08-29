const ws =  require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client2');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 웹소켓 서버 접속
const wss = new ws.Server({server}); // <--- {port: PORT, server: server}

//브라우저(클라이언트)들을 담을 배열 변수
const sockets = [];

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    console.log(wss.clients);
    // socket.readyState 웹 소켓의 클라이언트 상태를 나타내는 속성
    // CONNECTING: 0 웹소켓이 연결 시도중
    // OPEN : 1 웹소켓이 열린 상태
    // CLOSING: 2 웹소켓이 닫히는 중
    // CLOSED: 3 웺소켓이 닫힌상태
    console.log('클라이언트가 연결되었습니다.');
    //sockets배열에 브라우저 정보 추가
    // 배열생성하는거 대신 wss.clients로 보내도됨
    sockets.push(socket);

    //메세지 이벤트
    socket.on('message', (message) => {
        // 웹 소켓을 통해 클라이언트와 서버간의 데이터를 주고받을 때는 일반적으로 문자열 또는 버퍼형태로 전달
        // 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 전환하는 직렬화 과정이 필요하다
        console.log(message); // 버퍼로 출력됨
        const msg = JSON.parse(message);    // 버퍼를 객체로
        console.log(msg); // 객체로 출력됨
        // socket.send(`서버메세지: ${message}`);
        sockets.forEach(elem => {
            console.log(elem.readyState);
            // elem.send(`서버메세지: ${message}`);
            elem.send( `${msg.name}: ${msg.message}`);
        });
    });

    //오류 이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생되었습니다.', err);
    });

    //접속 종료 이벤트
    socket.on('close', () => {
        console.log('클라이언트와의 연결이 종료되었습니다.');
    });
});