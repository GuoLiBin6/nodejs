#!/usr/bin/node
//创建http服务程序，当客户端请求时，给客户端发送一些数据
var server = require('http').createServer();

server.on('request',function(req,res){
  console.log('request:'+JSON.stringify(req.headers));
  //将req管道到当前屏幕
  req.pipe(process.stdout);
  res.write('你好 世界');
  //结束响应告诉客户端所有消息已经发送，并返回数据，若不调用次函数，客户端将一直等待
 res.end(' 数据传输完毕');
});

server.listen(8080,function(){
  console.log('listening on port:',this.address().port);
});
