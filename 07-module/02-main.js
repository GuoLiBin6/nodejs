#!/usr/bin/node

var Circle=require('./02-export-object');

console.log(Circle);


var c=new Circle(10);

console.log('d',c.diameter());
console.log('cir',c.cir());


