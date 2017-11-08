#!/usr/bin/node


var http=require('http');
var fs=require('fs');
var root = __dirname +'/'+ (process.argv[2]||'www');

http.createServer(function(req,res){
  var url = 'http://' + req.headers.host + req.url;
    console.log(req.url);
  console.log(req.headers);
  console.log('');

 

  var fileName= root +req.url;
  if(res){
     fs.createReadStream(fileName).pipe(res);
  }else{
    fs.createReadStream(fileName).pipe('not found');
  }
}).listen(8000);
