#!/usr/bin/node
//创建http服务程序，当客户端请求时，给客户端发送一些数据

var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req,res){
  var getDataObj = url.parse(req.url,true).query;
  var arrayIndex = getDataObj.id-1;

  fs.readFile("./JsonText.json",function readData(err,data){
    var jsonArr = JSON.parse(data);
    res.writeHead(200,{"Content-Type":"application/json",
                       "Access-Control-Allow-Origin":"*",
                       "Access-Control-Allow-Methods":"GET,POST"});
res.end(JSON.stringify(jsonArr[arrayIndex]));

  });
 

}).listen(8080,'192.168.106.144');
console.log('start server!');

