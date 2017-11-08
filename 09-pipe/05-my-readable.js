#!/usr/bin/node


//自定义可读流

var Readable=require('stream').Readable;
var util=require('util');
var rs = new Readable();

var c = 97;

var MyReadable=function(){
  Readable.call(this);
}


MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
}
util.inherits(MyReadable,Readable);
var rs=new MyReadable();
rs.pipe(process.stdout);

 
