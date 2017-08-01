const promise = require('promise');

function sleep(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

sleep().then(() => {
  console.log(2);
})
console.log(1);
