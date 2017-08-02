const regeneratorRuntime = require("regenerator-runtime");
const co = require('co');

function sleep(){
  return function(cb){
    setTimeout(cb, 2000);
  }
};

// generator
function* run(x){
  yield sleep();
  console.log(x);
  return x;
}

function* gen(){
  yield run(2);
  yield run(3);
  console.log(1);

  //
  yield [run(2), run(3)];
  console.log(1);

  //
  yield {1: run(2), 2: run(3)};
  console.log(1);
}

co(gen);
