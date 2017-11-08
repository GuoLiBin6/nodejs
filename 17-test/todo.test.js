#!/usr/bin/node

var assert = require('assert');
var Todo = require('./todo');

var todo = new Todo();
var testCount = 0;

delTest();
addTest();
throwTest();
doAysncTest(function(){
  console.log(testCount,'completed');
});

function delTest(){
  console.log('test delete function');
  todo.add('I will be deleted');
  assert.equal(todo.get(),1,'1 item should exist');
  todo.del();
  assert.equal(todo.get(),0,'0 item should exist');
  testCount++;
}

function addTest(){
  console.log('test add function');
  todo.del();
  assert.notEqual(todo.add('add'),0,'1 item should exist');
  testCount++;
}

function throwTest(){
  console.log('test add function');
  assert.throws(todo.add,/item/);
  testCount++;
}


function doAysncTest(cb){
  console.log('test doAysncTest function');
  todo.doAysnc(function(value){
    assert(true,'value should be true');
    testCount++;
    cb();
  });

  
}
