#!/usr/bin/node
//异步api
//实现文件复制

var fs = require('fs'); 

var src = process.argv[2];
var tar = process.argv[3];

var fileSrc = fs.readFile(src,function(err,buf){
  if(err){
    console.log(err.message);
  }
});

fs.writeFile(tar,fileSrc,function(err){
  if(err){
    console.log(err.message);
  }
});

