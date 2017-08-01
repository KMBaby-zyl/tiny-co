const promise = require('promise');

function sleep(x){
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(x);
      resolve(x);
    }, 2000);
  });
};

async function run() {
  var a = await sleep(2);
  console.log(1);

  sleep(3);
  console.log(4);
  return a;
}

run().then((data)=> {
  console.log(data);
});
