var Promise = require('../promise/promise.js');

// promise 的自执行
const co = function(gen){

    var g = gen();

    function next(data){
        var result =  g.next(data);
        if (result.done) return result.value;

        result.value.then(function(data){
            next(data);
        });
    }
    next();
}


module.exports = co;
