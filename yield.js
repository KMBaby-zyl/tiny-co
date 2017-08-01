const co = require('co');
var list = [1,2,3,4];

function sleep(){
  return function(cb){
    setTimeout(cb, 2000);
  }
};

function* run(num){
  console.log(num);
  yield sleep();
  console.log(num);
  return num;
};

function* main(){
  console.log('main');
  //yield map(function* (item){
    //yield run(item);
  //}, list);
  let rlist = [];
  for(var i = 0; i<list.length; i++){
    rlist.push(run(list[i]));
  };
  console.log(rlist);

  //function getrlist(r){
    //return r;
  //}
  //yield getrlist(rlist);
  yield rlist;

  //yield list;


  //yield list.map(function* (item){
    //yield run(item);
  //});
}

co(main);

setTimeout(function(){
}, 10000);

