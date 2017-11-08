#!/usr/bin/node
//流的方式
//实现文件复制功能

var fs = require('fs'); 

var src = process.argv[2];
var dst = process.argv[3];

fs.createReadStream(src).pipe(fs.createWriteStream(dst));
