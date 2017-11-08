#!/usr/bin/node
//同步方式
//底层api
//实现cat功能

//引入fs模块
var fs = require('fs'); 

//获取命令行参数
var file = process.argv[2];

//获得文件长度  同步
var len = fs.statSync(file).size;
//创建buffer,符合文件长度
var buf = new Buffer(len);


//打开文件
var fid = fs.openSync(file,'r');
//读取文件到buffer中,参数为从第0个开始读，读取len长度，到buf中
fs.readSync(fid,buf,0,len,0);
//打印文件
console.log(buf.toString('utf8'));

//关闭文件
fs.closeSync(fid);

