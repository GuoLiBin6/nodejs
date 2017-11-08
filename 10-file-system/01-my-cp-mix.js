#!/usr/bin/node
//混合方式
//实现文件复制

var fs = require('fs'); 

var src = process.argv[2];
var tar = process.argv[3];

var fileSrc = fs.openSync(src,'r');//底层api打开源文件

var fid = fs.readFileSync(fileSrc);

var fileTar = fs.openSync(tar,'w');

fs.writeFileSync(fileTar,fid);

fs.closeSync(fileSrc);
fs.closeSync(fileTar);

