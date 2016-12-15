var co = require('./co.js');
var Promise = require('../promise/promise.js');

var a = function (flag){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
           if(flag == 5) reject('flagerror' + flag);
           else resolve(flag +1);
            
       }, 2000); 
    });
}


var gen = function* (){
    var a1 = yield a(1);
    console.log(a1);
    var a2 = yield a(2);
    console.log(a2);
}

co(gen);


