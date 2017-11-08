#!/usr/bin/node

//定义一个炸弹类
function bomb(){
  this.message="bomb";
}

//给类原型增加一个方法
bomb.prototype.explode=function(){
  console.log(this.message);
}

//实例化类
var Bomb=new bomb();
//bind确保方法绑定到正确的对象上
var timeID=setTimeout(Bomb.explode.bind(Bomb),2000);

//clearTimeout(timeID);
