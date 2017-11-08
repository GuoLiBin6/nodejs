#!/usr/bin/node


var https = require('https');

const{ URL } = require('url');

var user = process.argv[2] || 'wangding';
var url =  'https://api.github.com/search/repositories?q=user:wangding';

https.get(new URL(url),function(res){
 var result = '';
 res.on('data',function(data){

   result += data.toString('utf8');

 });
 res.on('end',function(){
   var weather = JSON.parse(result);
   console.log(weather);
 
 });


}); 

