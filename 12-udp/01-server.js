#!/usr/bin/node


//udp协议服务程序
//用nc程序向客户端发送消息

var dgram = require('dgram');

var socket=dgram.createSocket('udp4');
socket.bind(8080);

socket.on('message',function(msg,rinfo){
  var line = msg.toString('utf8');

  process.stdout.write(line,line.length);
});

socket.on('listening',function(){
  console.log('server ready',socket.address());
});
