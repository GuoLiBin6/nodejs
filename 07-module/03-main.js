#!/usr/bin/node


var obj=require('./03-export-all');

console.log(obj.pi);
console.log(obj.cir(10).area());

var c=new obj.Circle(20);
console.log(c.diameter());
