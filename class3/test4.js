const promise = require('promise');

function sleep(x){
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(x);
      resolve(x);
    }, x);
  });
};

async function run() {
  var a = await promise.all([sleep(2000), sleep(3000)]);
  console.log(1);

  sleep(3);
  console.log(4);
  return a;
}

run().then((data)=> {
  console.log(data);
});
