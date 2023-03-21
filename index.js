var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var duty = 0;
app.get('/', (req,res)=>{
  res.send(`<h5>welcome to wireless gate drive server</h5><br>current duty cycle:${duty} `)
});

server.listen(PORT, function(){
  console.log('listening sever on *:'+ PORT);
});

var io = require('socket.io')(server);
io.on('connect', function(socket){
  console.log('a user connected :'+socket.id);
  socket.on('message', function (data) {
    console.log(data);
    duty = data.message;
    io.emit('message', data.message);
});
})