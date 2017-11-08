#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process id:',process.pid);

var child = cp.fork('./02-child.js');



setTimeout(function(){
  
  console.log('father over,has runs 5 seconds');

},5000);
