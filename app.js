var express = require('express');
var app = express();
var http = require('http').createServer(app);
var  io = require('socket.io')(http);

app.use(express.static('public'));

http.listen(3000, function(){
  console.log('server on!');
});

io.on('connection', (socket) =>{
  console.log(`연결 됬어요`);

  socket.on('keydown', (payload) =>{
    socket.broadcast.emit('keydown', payload);
  });

  socket.on("keyup", (payload) =>{
    socket.broadcast.emit("keyup", payload);
  })
})