const promise = require('promise');
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const asyncFun1 = function(){
  return new promise(resolve => {
    sleep(2000).then(() => {
      console.log(1)
      resolve();
    });
  })
}

const asyncFun2 = function(){
  return new promise(resolve => {
    sleep(1000).then(() => {
      console.log(2)
      resolve();
    });
  })
}

promise.all([asyncFun1(), asyncFun2()])
  .then(()=> console.log(3));
