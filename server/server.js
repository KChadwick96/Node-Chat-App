const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the server!',
        created_at: new Date()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined!',
        created_at: new Date()
    });

    socket.on('createMessage', function(message) {
        console.log('createMessage', message);

        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            created_at: new Date()
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconected');
    });
});

server.listen(port, () => console.log("Server is up..."));