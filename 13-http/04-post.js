#!/usr/bin/node

//post方法，从客户端向服务器发送数据
//http.request()

var http = require('http');
var url = require('url');

var msg = process.argv[2] || '我是客户端，你好！';

var options = url.parse('http://localhost:8080');
options.method = 'POST';
console.log('options:',options);

var req = http.request(options,function(res){
  console.log('satus code:',res.statusCode);
  console.log('status message:',res.statusMessage);
  console.log('');

  res.setEncoding('utf8');
  res.on('data',function(data){
    console.log('data:',data);
  });
});

req.on('err',function(err){
  if(err){
    console.log('something wrong:',err.msg);
  }
});

req.write(msg);
req.end();

