#!/usr/bin/node
//创建tcp协议的服务器程序，绑定一个端口，收到客户端请求后给客户端发送相应的数据
//net.createServer()

var fs = require('fs'); 

var server = require('net').createServer();

//执行监听，客户端新开启服务，执行回调函数
server.on('connection',function(socket){
  console.log('new connection from',socket.remoteAddress);

  socket.setEncoding('utf8');

  socket.on('data',function(data){
    console.log(data.length,data);
  });

  socket.on('end',function(){
    console.log(socket.remoteAddress,'disconnected');
  });


}).listen(8080,function(){
  console.log('TCP server is listening on port 8080');
});
