#!/usr/bin/node

var buf=new Buffer(256);
buf[0]=23;

console.log('buffer length:',buf.length);
console.log('buffer content:',buf);


for(var i=0;i<256;i++)
  buf[i]=i;
console.log('\nbuffer content:',buf);


var end=buf.slice(250,256);
console.log('\nbuf end 6 items:',end);

end.fill(1);
console.log('end was fill  by 1:',end);

//数组实例化
var array = ['a',0xba,0xdf,0x00,255,10];
var buf1=new Buffer(array);

console.log('buf1:',buf1);

//字符串实例化
var buf2=new Buffer('I am buf2','utf8');

console.log('buf2:',buf2.toString());

//拷贝数据实例化
var buf3=new Buffer(buf2.length);
buf2.copy(buf3,0,0,buf2.length);
console.log('buf3:',buf3.toString() );

