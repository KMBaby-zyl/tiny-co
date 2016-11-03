/*
 * promise
 */
const REJECT = 'reject';
const FULFILL = 'fulfill';
let id = 0;

const Promise = function(fn, pre){
    let self = this;
    this.id = id++;
    this.state = 'init';
    this.fn = fn;
    this.pre = pre;
    if(!this.pre){
        //setTimeout(function(){logPromise(self)}, 6000)
        this.run();
    }
    return this;
}

Promise.prototype.resolve = function(d){
    if(d instanceof Promise){
    }
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
    //console.log('then ' + this.id);

    this.nextPromise = new Promise(function(resolve, reject){
        let r = this.pre.callback(this.pre.result);
        //console.log('runCalback ' + 'pre' + this.pre.id + 'this ' + this.id );
        // ispromise
        if(r && r.state == 'init'){
            this.nextPromise.pre = r;
            r.nextPromise = this.nextPromise;
            self.nextPromise = r;    
            r.successCallback = this.successCallback;
            r.failCallback = this.failCallback;
            
            r.pre = self;
        }else{
            resolve(r);
        }
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

function logPromise(ctx){
    let self = ctx;
    if(self.pre) console.log('-->')
    console.log( self.id);
   
   if(self.nextPromise) logPromise(self.nextPromise); 
}
