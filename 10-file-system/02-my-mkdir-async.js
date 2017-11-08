#!/usr/bin/node

//异步版本
var fs = require('fs'); 


var dir = process.argv[2] || 'new-dir';


fs.mkdir(dir,function(err){
  if(err){
    console.log('wrong');
  }else{
    console.log('dir has done');
  }
});

//fs.mkdirSync(dir);

