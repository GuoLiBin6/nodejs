#!/usr/bin/node
//底层api
//实现cp功能
//同步模式

var fs = require('fs'); 

//获取命令行参数
var src = process.argv[2];
var tar = process.argv[3];

//操作源文件

var len = fs.statSync(src).size;

var buf = new Buffer(len);

var fileSrc = fs.openSync(src,'r');//读取模式打开文件

fs.readSync(fileSrc,buf,0,len,0);

fs.closeSync(fileSrc);

//操作目标文件

var fileTar = fs.openSync(tar,'w');

fs.writeSync(fileTar,buf);

fs.closeSync(fileTar);


