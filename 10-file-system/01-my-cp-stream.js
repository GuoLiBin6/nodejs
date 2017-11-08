#!/usr/bin/node
//流api
//实现文件复制

var fs = require('fs'); 

var src = process.argv[2];
var tar = process.argv[3];

fs.createReadStream(src).pipe(fs.createWriteStream(tar));
