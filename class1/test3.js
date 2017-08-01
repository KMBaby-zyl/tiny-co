function* getAll() {
  console.log(1);
  return 3;
}

function* main(){
  var ga = getAll();
  var a = ga.next();
  console.log(a);
  console.log(2);
}


var g = main();
g.next();
g.next();
g.next();
