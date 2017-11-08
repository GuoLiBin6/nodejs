#!/usr/bin/node
//同步api
//实现文件拷贝

var fs = require('fs'); 

var src = process.argv[2];
var tar = process.argv[3];

//对源文件操作

//var fileSrc = fs.readFileSync(src);

//对目标文件操作

//fs.writeFileSync(tar,fileSrc);

//统一操作
fs.writeFileSync(tar,fs.readFileSync(src));


