// 用co进行自执行
const co = require('co');

function* foo() {
  var index = 0;
  while (index <= 2)
    yield index++;
}

co(foo);
// You may only yield a function, promise, generator, array, or object

// co 就是上面那个自动执行器的扩展，它的源码只有几十行，非常简单。
// 首先，co 函数接受 Generator 函数作为参数，返回一个 Promise 对象。
