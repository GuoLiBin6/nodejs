#!/usr/bin/node

//处理异常，打印错误信息
var EventEmitter=require('events').EventEmitter;

function MusicPlayer(track){
  this.track=track;
  this.playing=false;
  for(var methodName in EventEmitter.prototype){
    console.log(methodName);
    this[methodName]=EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype={
  toString:function(){
    if(this.playing){
      return 'New Playing:'+this.track;
    }
    else{
      return 'Stopped';
    }
  }
}

var musicPlayer=new MusicPlayer('store');

musicPlayer.on('play',function(){
  this.playing='true';
  console.log('\n',this.toString());
});

musicPlayer.on('stop',function(){
  this.playing='false';
  console.log('\n',this.toString());
});

musicPlayer.on('error',function(err){
  console.error(err);
  process.exit(1);
});

musicPlayer.emit('play');

setTimeout(function(){
  musicPlayer.emit('stop');
},5000);

setTimeout(function(){
  musicPlayer.emit('error',new Error('wrong'));
},3000);
