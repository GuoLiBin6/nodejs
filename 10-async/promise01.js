
var fetch = require('node-fetch');

fetch('http://api.github.com')
.then(function(res){
  return res.json();
}).then(function(json){
  console.log(json);
});
