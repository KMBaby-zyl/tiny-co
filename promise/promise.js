/*
 * promise
 */
const REJECT = 'reject';
const FULFILL = 'fulfill';

const Promise = function(fn, pre){
    this.state = 'init';
    this.fn = fn;
    this.pre = pre;
    if(!this.pre){
        this.run();
    }
    return this;
}

Promise.prototype.resolve = function(d){
    this.state = FULFILL;
    this.result = d;
    this.next();
    return this;
}

Promise.prototype.reject = function(d){
    this.state = REJECT;
    this.result = d;
    this.next();
    return this;
}
//
Promise.prototype.then = function(fn, failCallback){
    let self = this;
    this.successCallback = fn;
    this.failCallback = failCallback || '';

    this.nextPromise = new Promise(function(resolve, reject){
        let r = self.callback(self.result);
        resolve(r);
    }, this);
    return this.nextPromise;
}
Promise.prototype.catch = function(fn){
    let self = this;
    this.failCallback = fn;
    this.nextPromise = new Promise(function(resolve, reject){
        let r = self.callback(self.result);
        resolve(r);
    }, this);
    return this.nextPromise;
}
// 调用 callback
Promise.prototype.next = function(){
    if(this.state == REJECT){   
        this.callback = this.failCallback;
        //this.failCallback && this.failCallback();
    }

    if(this.state == FULFILL){
        this.callback = this.successCallback;
        //this.successCallback && this.successCallback();
    }
    if(!this.callback) return;
    this.nextPromise.run();
}

Promise.prototype.run = function(){
    this.fn(this.resolve.bind(this), this.reject.bind(this));
}








//Promise.prototype.fail = function(fn){
    //this.failCallback = fn;
//}

module.exports = Promise;

//let a = new Promise(function(resolve, reject){
    //return resolve(1);
//});

//a().then(function(){
//});

