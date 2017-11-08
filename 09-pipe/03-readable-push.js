#!/usr/bin/node


var Readable = require('stream').Readable;

var rs = new Readable();
rs.push('hello ');
rs.push('my friend!\n');
rs.push(null);

rs.pipe(process.stdout);
