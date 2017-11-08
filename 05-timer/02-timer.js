#!/usr/bin/node


console.log('start...');

//取消定时器，添加清除
var timeID=setInterval(loop,500);
function loop(){
  console.log('process is loop printf');
}
setTimeout(function(){
  clearInterval(timeID);
},5000);
