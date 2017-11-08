var items;
get(show);

function get(callback){
  document.getElementById('output').innerHTML = '';
  fetch.text().then(function(data){
    items = JSON.parse(data);
    callback;
  });
};

function show(){
  var str = '<ul>\n';
  for(var i=0;i<items.length;i++){
    str += '<li>'+items[i]+'</li>\n';

  }
  str +='</ul>';
  document.getElementById('output').innerHTML = str;
}

