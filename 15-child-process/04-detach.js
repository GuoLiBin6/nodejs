#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process id:',process.pid);

var child = cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});

child.unref();
//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);

setTimeout(function(){
  
  console.log('father over,has runs 5 seconds');
  process.exit(0);
},5000);
