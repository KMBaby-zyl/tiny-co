let flag = 0;
function sleep(cb, time){
  setTimeout(cb, time);
};
const asyncFun1 = function(cb){
  sleep(()=> {
    flag++
    console.log(1);
    cb();
  }, 2000)
}

const asyncFun2 = function(cb){
  sleep(()=> {
    flag++
    console.log(2);
    cb();
  }, 1000)
}


const asyncThen = function() {
  if(flag < 2) return;
  // todo
  console.log(3);
}
asyncFun1(asyncThen);
asyncFun2(asyncThen);
