#!/usr/bin/node

var pi=Math.PI;

module.exports=function(r){
  function cir(){
    return pi*2*r;
  }
  function area(){
    return pi*r*r;
  }
  return{
    cir:cir,
    area:area
  };
}

console.log('02-export-function:',module);
