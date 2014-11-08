//Declared Variables
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Added in Express
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/* looks for the style sheet */
app.use("/style.css", express.static(__dirname + '/style.css'));

/* looks for the Assets */
app.use("/assets", express.static(__dirname + '/assets'));

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
