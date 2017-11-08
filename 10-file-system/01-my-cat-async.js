#!/usr/bin/node
//高级api
//异步方式（有回调函数）
//实现cat功能

var fs = require('fs'); 

var file = process.argv[2];

//读取文件（路径，回调函数）
fs.readFile(file,function(err,buf){
  //如果错误进行错误处理
  if(err){
    console.log(err.message);
    process.exit(1);
  }else{
    console.log(buf.toString('utf8'));
  }
});


//
//相比底层api，省去打开和关闭文件操作，只需关注逻辑本身是否错误
