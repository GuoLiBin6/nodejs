#!/usr/bin/node

var http = require('http');
var qs = require('querystring');

var items = [];
http.createServer(function(req,res){
  if(req.url!='/'){
    err(res);
    return;
  }
  console.log(req.headers);
  console.log(req.method);

  switch(req.method){
    case 'POST':
      add(req,res);
      break;
    case 'GET':
      show(res);
      break;
    default:
      err(res);
      break;
  }
  res.end('aa');


 
}).listen(8080);

function show(res){
  var html = '<!DOCTYPE html>\n'
    + '<html>\n'
    +   '<head>\n'
    +      '<meta charset="utf-8">\n'
    +      '<title>do list</title>\n'
    +   '</head>\n'
    +   '<body>\n'
    +     '<h1>todo list</h1>\n'
    +     '<ul>\n'
    + items.map(function(item){return '<li>'+item+'</li>';}).join('\n')
    +     '</ul>\n'
    +     '<form method="POST" action="/">\n'
    +        '<p><input type="text" name="item" /></p>\n'
    +        '<p><input type="submit" value="add" /></P>\n'
    +     '</fomr>\n'
    +   '</body>\n'
    + '</html>';
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.statusCode = 200;
  res.end(html);
}

function add(req,res){
  var body = '';

  req.on('data',function(data){
    body += data;
  });
  req.on('end',function(){
    if(body!=''){
      items.push(qs.parse(body).item);
    }
  });
  show(res);
}

function err(res){
  var msg = 'Not found';

  res.statusCode = 404;
  res.setHeader('Content-Length',msg.length);
  res.setHeader('Content-Type','text/plain');
  res.end(msg);
}
