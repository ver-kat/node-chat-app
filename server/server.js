const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New user connected");
    socket.on('disconnect', () => {
        console.log("Disconnected user");
    });
});


server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
