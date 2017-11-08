#!/usr/bin/node


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

var max = 3;
var pool = max;
var total = 5;
var count = 0;


function f2(){
  count++;
  pool--;
  console.log('this is f2\n');

  if(count<total){
    var task = new LongTimeOperation(count);
    task.go(f2);
    pool++;
  }else{
    if(pool==0)
       end();
  }
}


function end(){console.log('the end task');}

for(var i=0;i<max;i++,count++){
  var task = new LongTimeOperation(count);
  task.go(f2);
}

