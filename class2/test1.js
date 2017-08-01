function sleep(cb){
  setTimeout(cb, 2000);
};


sleep(() => {
  console.log(2);
});
console.log(1);
