#!/usr/bin/node

//js原型继承
var Dog=require('./02-dog.js');

var taidi=new Dog('taidi');
var jingba=new Dog('jingba');
var energy=8;

function onBark(){
  console.log(this.name+' barked!');

  energy--;
  if(energy<=0){
    this.stop();
    console.log(this.name+' is taired');
  }
}

taidi.on('bark',onBark);
jingba.on('bark',onBark);
