var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    socket.emit('createMessage',{
        from: 'lior',
        text: 'Hi From Lior'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('Got new message', message);
});

