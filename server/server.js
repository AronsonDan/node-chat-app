const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });

    socket.emit('newMessage', {
        from: 'Dan',
        text: "Good Morning",
        createdAt: 123456789
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });
});


server.listen(port, () => {
    console.log(`Node is up and running on port ${port}`);
});