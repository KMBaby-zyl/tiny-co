// 用co进行自执行
const co = require('co');

function sleep(){
  return function(cb){
    setTimeout(cb, 2000);
  }
};

var getX = function* (x){
  yield sleep(2000);
  return x;
}

var main = function* (){
  var a = getX(1);
  var b = getX(2);
  var c = getX(3);
  console.log(a+b+c);
}

co(main);
