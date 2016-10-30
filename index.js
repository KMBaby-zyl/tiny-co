let i = 1;
let acyncfun = function(){
    return new Promise(function(resolv, reject){
        resolv(i++);
    });
}

//
let gen = function* () {
    let a = yield acyncfun();
    let b = yield acyncfun();
    
    console.log(a);
    console.log(b);
    return i++;
}

//
function co(gen){
    var g = gen();

    function next(data){
        var p = g.next(data);
        console.log(p);
        if(p.done) return p.value;
        p.value.then(function(data){
            next(data);
        }); 
    }
    
    next(); 
    return g;
}

//
var thunk = function(fn){

    return function(){
        var args = Array.prototype.slice(arguments, arguments);
        
        return function(callback){
            args.push(callback);
            fn.apply(this, args);
        }
    }
}

var thunkfun = thunk(function(m, callback){
    m = m + 1;
    callback(m);
});


//
var readfile = thunk(readfile);

//co(gen);
function co_thunk(gen){

}

/*
 * co generator 执行器， yield 必须返回promise 或者thunk
 * thunk: 函数参数封装
 * promise: 链式回调
 */

