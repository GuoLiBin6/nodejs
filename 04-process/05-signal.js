#!/usr/bin/node

console.log('process id',process.pid);

//使程序不会退出，等待键盘输入信息
process.stdin.resume();

process.on('SIGINT',function(){
  console.log('  prcess ctrl+c , good bye');
  process.exit(0);
});

process.on('SIGTSTP',function(){
  console.log('  press ctrl+z , stop the process');
});

