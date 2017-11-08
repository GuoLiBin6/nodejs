#!/usr/bin/node
//更高级 流的方式
//实现cat功能

var fs = require('fs');

var file = process.argv[2];
//创建可读流管道到可写流上
fs.createReadStream(file).pipe(process.stdout);
