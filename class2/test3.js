const co = require('co');

// thunk
function sleep(){
  return function(cb){
    console.log('sleep');
    setTimeout(cb, 2000);
  }
};

function* gen(){
  yield sleep();
  console.log(1);

  sleep()(()=>{
    console.log(4);
  });
  console.log(2);
}

co(gen);
