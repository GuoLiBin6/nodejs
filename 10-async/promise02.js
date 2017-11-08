
var fetch = require('node-fetch');

fetch('http://api.github.com')
.then(function(res){
  return res.json();
}).then(function(json){
  console.log(json);
});


function fetchPage(){
  console.log('fetchPage');

  return new Promise(function(resolve,reject){
    //ok
     var delay = parseInt((Math.random()*10000000)%5000);

     setTimeout(function(){
       console.log('the task cost'+delay+'ms');
       resolve('this is page data');
     },delay);
    //wrong
    
    //reject()
  })
}

fetchPage().then(function(data){
  console.log(data);
});
