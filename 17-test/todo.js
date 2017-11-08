#!/usr/bin/node

function Todo(){
  this.Tools = [];
}

Todo.prototype.add = function(item){
  if(!item) throw new Error('Todo#add item is null');
  this.Tools.push(item);
}

Todo.prototype.del = function(){
  this.Tools = [];
}

Todo.prototype.get = function(){
  return this.Tools.length;
}

Todo.prototype.doAysnc = function(cb){
  setTimeout(cb,2000,true);
}

module.exports = Todo;
