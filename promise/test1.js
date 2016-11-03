//var Promise = require('./promise');


var a = function (flag){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
           console.log(flag + 1);
           if(flag == 5) reject('flagerror' + flag);
           else resolve(flag + 1);
            
       }, 2000); 
    });
}


a(2).then(function(flag){
    console.log('callback1 ' + flag);
    return a(flag);
})
.then(function(a){
    console.log('callback2 ' + a)
})
.catch(function(f){
    console.log('fail');
    console.log(f);
});



