//Declared Variables
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Added in Express
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Added in Socket.io
io.on('connection', function(socket){
  console.log('a user connected');
});

//Print out Chat Message
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//Listening for server
http.listen(3000, function(){
  console.log('listening on *:3000');
});