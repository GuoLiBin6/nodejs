#!/usr/bin/node
//使用execFile
//由父进程创建子进程
//由于execFile基于缓存提取数据，所以父进程等待子进程执行完毕后，一次性将执行结果打印输出
var cp = require('child_process');

console.log('I am father process id:',process.pid);

cp.execFile('./02-child.js',function(err,stdout,stderr){
  if(err){
    console.error(err.msg);
  }
  console.log(stdout);
  });


