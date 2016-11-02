var Promise = require('./promise');

var promiseCount = 0;
function testPromise() {
    var thisPromiseCount = ++promiseCount;

    console.log('beforeend', thisPromiseCount + ') 开始(同步代码开始)<br/>');

    // 我们创建一个新的promise: 然后用'result'字符串完成这个promise (3秒后)
    var p1 = new Promise(function (resolve, reject) {
        // 完成函数带着完成（resolve）或拒绝（reject）promise的能力被执行
        console.log('beforeend', thisPromiseCount + ') Promise开始(异步代码开始)<br/>');

        // 这只是个创建异步完成的示例
        setTimeout(function () {
            // 我们满足（fullfil）了这个promise!
            resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

    // 定义当promise被满足时应做什么
    p1.then(function (val) {
        // 输出一段信息和一个值
        console.log('beforeend', val + ') Promise被满足了(异步代码结束)<br/>');
    });

    console.log('beforeend', thisPromiseCount + ') 建立了Promise(同步代码结束)<br/><br/>');
}


testPromise();
