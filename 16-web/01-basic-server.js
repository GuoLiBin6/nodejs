#!/usr/bin/node

var http = require('http');

http.createServer(function(req,res){
  var body = 'hello';

  res.statusCode = 404;
  res.setHeader('Content-Length',Buffer.byteLength(body));
  res.setHeader('Cache-Control',500);

  console.log(req.headers);
  req.pipe(process.stdout);
  //console.log(req);

  res.end(body);
}).listen(8080);
