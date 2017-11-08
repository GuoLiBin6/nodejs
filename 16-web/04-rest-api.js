#!/usr/bin/node

var http = require('http');
var items = [];

http.createServer(function(req,res){
  console.log(req.headers);
  console.log('');

  switch (req.method){
    case 'GET':
      get(res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'PUT':
      change(req,res);
      break;
    case 'DELETE':
      del(req,res);
      break;
    default:
      break;

  }
}).listen(8080);

function get(res){
  console.log('GET');
  var body = JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(body));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.end(body);
}

function insert(req,res){
  console.log('POST');
  var item ='';
  req.on('data',function(data){
    item += data;
     });
  req.on('end',function(){
    items.push(item);
  });
  res.end();
}

function change(req,res){
  console.log('PUT');

  var arg = req.url.split('/');
  var i = parseInt(arg[1]);
  var it = '';
  req.on('data',function(data){
    it += data;
    if(!items[i]){
      res.statusCode = 404;
      res.end('Not found');
    }else{
      items[i] = it;
    }
  });
  req.on('end',function(){
    res.end('change ok');
  });
}

function del(req,res){
  console.log('DELETE');
  //console.log(req.url);
  //console.log(req.url.split('/'));
  
  var arg = req.url.split('/');
  if(arg[1] == ''){
    items = [];
  }
  var i = parseInt(arg[1]);
  if(!items[i]){
    res.statusCode = 404;
    res.end('Not found');
  }else{
    items.splice(i,1);
    res.end('Dtlete ok');
  }

}
//curl http.. get请求
//curl -d 'abc' http.. POST请求
//curl -X DELETE http.. delete请求
//curl -X PUT -d 'abc' put请求
