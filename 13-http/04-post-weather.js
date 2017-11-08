#!/usr/bin/node

//post方法，从客户端向服务器发送数据
//http.request()

var https = require('https');
var url = require('url');

var options = url.parse('https://www.jisuapi.com/api/weather/query?appkey=7e38368e636890c8&city=石家庄');


options.method = 'POST';
console.log('options:',options);

var req = https.request(options,function(res){
  res.setEncoding('utf8');
  var result = '';
  res.on('data',function(data){
   result+= data.toString('utf8');
  });
});

req.on('end',function(){
  console.log(JSON.parse(result));
});
