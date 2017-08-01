var Promise = require('promise');

var getAll = function () {
  console.log(1);
  return new Promise(function(resolve) {
    console.log(2);
    resolve();
  });
}


getAll().then(function(){
  console.log(3);
})
console.log(4);
