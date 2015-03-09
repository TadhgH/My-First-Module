function hello(){
  return "world";
}

function helloWorld(){
  return hello() + ' again';
}

function privateFunc(num){
  return num+1;
}

function increment(num){
  return privateFunc(num);
}


module.exports.helloWorld = helloWorld;
module.exports.inc = increment;
