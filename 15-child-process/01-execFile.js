#!/usr/bin/node
//使用execFile实现cat文件
var cp = require('child_process');

cp.execFile('cat',['00.js'],function(err,stdout,stderr){
  if(err){
    console.error(err.msg);
  }
  console.log(stdout);
  });

cp.execFile('cp',['00.js','02.js'],function(err,stdout,stderr){
  if(err){
    console.error(err.msg);
  }
  console.log(stdout);
  });
