// const {a, b} = require("./module");
// console.log(a);
// console.log(b);

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // res.writeHead(200);
    // res.write("<h1>Hello</h1>");
    // res.end("<p>End</p>");

    // 파일 전송
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

server.listen(8000, () => console.log('8000번 포트로 실행'));
