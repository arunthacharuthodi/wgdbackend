const { json } = require('express');

const server = require('http').createServer()
const io = require('socket.io')(server)

var duty = .1;


//for nodemcu
const nodemcuNamespace = io.of('/nodemcu');
nodemcuNamespace.on('connection', (nodemcu) => {
  // handle chat events
  console.log('nodemcu connected...', nodemcu.id);
  // nodemcu.send("2");
  nodemcu.join('nodemcuRoom');
  // nodemcu.emit(1);



});

io.on('connection', function (client) {

  console.log('client connect...', client.id);

 

  client.on('message', function name(data) {
    // Convert data.message to an integer using parseInt()
    client.emit("hello")

    // client.send("2")
    console.log("message from phone: "+data.message)
    client.emit("message", data.message)
   


    
    // Emit the integer value of data.message to the "nodemcuRoom" namespace
    // nodemcuNamespace.to("nodemcuRoom").emit("message",data.message );
  })


  client.on('disconnect', function () {
    console.log('client disconnect...', client.id)
    // handleDisconnect()
  })

  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
})



var server_port = process.env.PORT || 443;
server.listen(server_port, function (err) {
  if (err) throw err
  console.log('Listening on port %d', server_port);
});



