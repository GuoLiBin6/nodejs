#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process id:',process.pid);

cp.exec('cat messy.txt | sort | uniq',function(err,stdout,stderr){
  console.log(stdout);
});
