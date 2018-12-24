let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let rooms = [];

let room;

app.use(express.static('public'));
http.listen(3000, function(){
  console.log('server on!');
});

io.on('connection', (socket) =>{
  
  console.log(`연결 됐어요`);

  socket.emit("roomlist", rooms);

  socket.on("joined", (roomName) =>{
    socket.join(roomName);
  })

  socket.on('keydown', (payload, roomName) =>{
    console.log("keydown", roomName);
    console.log(io.sockets.adapter.rooms);
    socket.to(roomName).emit('keydown', payload);
  });

  socket.on("keyup", (payload, roomName) =>{
    console.log("keydown", roomName);
    socket.to(roomName).emit("keyup", payload);
  });

  socket.on("createRoom", (roomName) =>{
    socket.join(roomName);
    rooms.push(roomName);
    io.emit("roomlist", rooms);
    console.log(io.sockets.adapter.rooms);
    socket.emit("createRoom", roomName);
  });

  socket.on("join", (roomName) =>{
    socket.join(roomName);
    console.log(Object.keys(io.sockets.adapter.rooms[roomName].sockets).length);
    socket.emit("join", roomName);
  });
})