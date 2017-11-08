#!/usr/bin/node

var cp = require('child_process');

console.log('I am child process id:',process.pid);


var timer = setInterval(function(){
  console.log(new Date(Date.now()));
},2000);

setTimeout(function(){
  clearInterval(timer);
  console.log('over');
},16000);
