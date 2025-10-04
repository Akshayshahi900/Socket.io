const express = require('express');
const { createServer } = require('node:http');
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

// io.on("connection", (socket) => {
//     console.log(`A user Connected`);

//     socket.on("disconnect", (socket) => {
//         console.log(`User disconnected`);
//     })

//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });

//     socket.on('hello',(arg)=>{
//         console.log("hello" +arg);
//     })
    
// })
 io.on('connection', (socket) => {
  socket.emit('hello', 1, '2', { 3: '4', 5: Buffer.from([6]) });
});

app.use(express.static("public"));
app.get('/', (req, res) => {
    res.send('<h1> Hello world</h1');
})


server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})
