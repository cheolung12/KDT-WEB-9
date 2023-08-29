const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});



io.on('connection', (socket) => {
    socket.on('openMessage', (arg, arg2, cb) => {
        console.log(arg, arg2);
        cb(arg);
    });

    socket.on('formMessage', (obj) => {
        console.log(obj);
        // 전체에 보내고 싶다면 io.emit
        socket.emit('serverMessage', obj);
    });
});


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});