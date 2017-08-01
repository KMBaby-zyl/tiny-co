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
  console.log(1);

  var g = run(3);
  g.next().value(()=> {
    console.log(5);
    g.next();
  });
  console.log(4);

}

co(gen);
