#!/usr/bin/node



module.exports={
  pi:require('./02-export-var'),
  cir:require('./02-export-function'),
  Circle:require('./02-export-object')
};

console.log(module);
