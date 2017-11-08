#!/usr/bin/node

console.time('GET DATA');

//操作
for(var i=0;i<10000;i++)
  for(var j=0;j<10000;j++)
    var number=i*j;


console.timeEnd('GET DATA');
console.log('number:',number);
