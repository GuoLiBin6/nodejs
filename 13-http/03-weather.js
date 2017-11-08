#!/usr/bin/node


var http = require('http');

const{ URL } = require('url');

var city = process.argv[2] || '石家庄';
var url =  'http://api.jisuapi.com/weather/query?appkey=7e38368e636890c8&city='+city;

http.get(new URL(url),function(res){
 var result = '';
 res.on('data',function(data){

   result += data.toString('utf8');

 });
 res.on('end',function(){
   var weather = JSON.parse(result);
   console.log(weather);
 
 });


}); 

