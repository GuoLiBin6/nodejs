#!/usr/bin/node

//http客户端程序
//在脚本程序中向URL发送http请求

var http = require('http');
var url = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(url,function(res){
  console.log('status code:',res.statusCode);//请求的状态码
  console.log('status message:',res.statusMessage);//状态信息
  console.log('http version',res.httpVersion);//http版本
  console.log('');

  console.log(res.headers);
  console.log('');
  
  res.pipe(process.stdout);
});

