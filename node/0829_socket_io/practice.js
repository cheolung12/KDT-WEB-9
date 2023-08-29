const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;


const server = http.createServer(app);
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('practice');
});

io.on('connection', (socket) => {
    socket.on('hello', (obj) => { 
        console.log(`client: ${obj.value}`);
        socket.emit('hello', 'hello: 안녕하세요.'); 
    });
    socket.on('study', (obj) => { 
        console.log(`client: ${obj.value}`);
        socket.emit('study', 'study: 공부합시다!'); 
    });
    socket.on('bye', (obj) => { 
        console.log(`client: ${obj.value}`);
        socket.emit('bye', 'bye: 잘가~'); 
    });
});


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});