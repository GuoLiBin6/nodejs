#!/usr/bin/node
//串行

var LongTimeOperation=function (taskID){
  var id=taskID;
  this.go=function(callback){

  
  console.log('this is a longTimeOperation'+id);
  var delay=parseInt((Math.random()*10000000)%5000);
  setTimeout(function(){
    console.log('the task'+id+' cost '+delay+'ms');
  callback();
  },delay);

  }
}

var count = 0;
function f2(){
  count++;
  console.log('this is f2\n');
  if(count<5){
    var task = new LongTimeOperation(count);
    task.go(f2);
  }else{
    end();
    console.timeEnd('flow-control');
  }
}

function end(){
  console.log('the end task');

}

console.time('flow-control');
var task0 = new LongTimeOperation(0);
task0.go(f2);
