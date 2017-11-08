#!/usr/bin/node


console.log('start...');


var timeID=setInterval(loop,500);
timeID.unref();


function loop(){
  console.log('process is loop printf');
}


setTimeout(function(){
  console.log('over');
},5000);
