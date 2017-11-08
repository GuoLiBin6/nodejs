#!/usr/bin/node



setTimeout(function(){  
  process.send('this is a message from child');
  
},5000);

process.on('message',function(msg){
  console.log('I am child process id:',process.pid);
  console.log(msg);
});
