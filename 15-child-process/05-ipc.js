#!/usr/bin/node

var cp = require('child_process');

var child = cp.fork('./05-ipc-child.js');

setTimeout(function(){  
  child.send('this is a message from father');
},2000);

process.on('message',function(msg){
  console.log('I am father process id: '+process.pid);
  console.log(msg);
});
