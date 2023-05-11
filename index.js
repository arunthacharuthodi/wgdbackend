var PORT = process.env.PORT || 3000;
const { log } = require('console');
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var duty = 0;
var yip = 0;
var reference_voltag = 0; 
var voltage_incoming;
var resend_duty = 0;
var cov_duty =0;
app.get('/', (req,res)=>{
  res.send(`<h5>welcome to wireless gate drive server</h5><br>current duty cycle:${duty} <br>
  <button onpress="">increase </button>
  `)
});

server.listen(PORT, function(){
  console.log('listening sever on *:'+ PORT);
});

var io = require('socket.io')(server);

  io.on('connect', function(socket){
    console.log('a user connected :'+socket.id);
    if(resend_duty !=0){
      io.emit('message', resend_duty.toString());

    }

      socket.on('message', function (data) {
        // console.log(data);
        // duty = data.message;
        reference_voltag = data.voltage_client;
        // duty = 1;
        io.emit('message', "0");
    });
    socket.on("voltage", function(voltage){
      // console.log("incoming voltage:"+voltage.voltage);
      voltage_incoming = voltage.voltage;
      // console.log("reference voltage:"+reference_voltag);
      var error  = reference_voltag - voltage.voltage;
      var yp = error * 0.1;
      var yi = yip + (error );
      yip = yi;
      duty = yp+yi;
      // console.log(duty);
      io.emit('message', (duty).toString());


  

      

    })


  })
