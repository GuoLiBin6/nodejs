#!/usr/bin/node


var pi=Math.PI;

var Circle=function(r){
  this.diameter=function(){
    return 2*r;
  }
  this.cir=function(){
    return pi*2*r;
  }
  this.area=function(){
    return pi*r*r;
  }
}

console.log('export object',module);
module.exports=Circle;
