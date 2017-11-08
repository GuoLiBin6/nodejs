#!/usr/bin/node

var cp = require('child_process');



cp.spawnSync('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});


console.log('I am father process id:',process.pid);
