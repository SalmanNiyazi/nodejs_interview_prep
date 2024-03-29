/*
Real-time Data with Socket.io:
Set up a basic server with Socket.io that emits a “ping” event every 5 seconds.
Write a client-side script to listen to these events and log the "ping" to the console.
 */

import express from 'express';
import { Socket } from 'node:dgram';
import { createServer } from 'node:http'
import { join } from 'node:path';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);
const io = new Server(server);

app.get('/',(req, res) => {
    res.sendFile(join('/home/salmanniyazi/nodejs_interview_prep/task3', 'index.html'));
})

io.on('connection', (socket) => {
    console.log('a user connected');
        socket.on('chat message', (msg) => {
            console.log('message: '+ msg);
        })
});

server.listen(3000, () => {
    console.log('server running on http://localhost:3000');
})