
var getAll = function (cb) {
  console.log(1);
  cb();
}

getAll(function(){
  console.log(2);
})

console.log(3);
