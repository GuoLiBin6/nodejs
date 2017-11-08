#!/usr/bin/node
//高级api
//同步方式
//实现cat功能

var fs = require('fs'); 

var file = process.argv[2];
//直接读取文件，readFile返回值为buffer
console.log(fs.readFileSync(file).toString('utf8'));
