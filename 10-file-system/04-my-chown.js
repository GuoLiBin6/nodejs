#!/usr/bin/node
//修改文件所有者

var fs = require('fs'); 

var uid = process.argv[2];
var gid = process.argv[3];
var file = process.argv[4];

fs.chownSync(file,Number(uid),Number(gid));
