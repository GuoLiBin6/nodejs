#!/usr/bin/node
//实现文件创建功能

var fs = require('fs'); 

var file = process.argv[2];

fs.writeFileSync(file,'');
