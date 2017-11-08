#!/usr/bin/node


var fs = require('fs'); 

var W = fs.watch(__dirname,console.log);

process.on('SIGINT',function(){
  W.close();

  console.log('unwitch the directory');
  console.log('Game over after ten second...');

  setTimeout(function(){
    process.exit();
  },10000);
});
