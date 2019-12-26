function one(calc) {
  return calc ? calc(1) : 1;
}
function two(calc) {
  return calc ? calc(2) : 2;
}
function three(calc) {
  return calc ? calc(3) : 3;
}
function four(calc) {
  return calc ? calc(4) : 4;
}
function five(calc) {
  return calc ? calc(5) : 5;
}
function six(calc) {
  return calc ? calc(6) : 6;
}
function seven(calc) {
  return calc ? calc(7) : 7;
}
function eight(calc) {
  return calc ? calc(8) : 8;
}
function nine(calc) {
  return calc ? calc(9) : 9;
}

function plus(y) {
  return function(x) {
    return x + y;
  };
}
function minus(y) {
  return function(x) {
    return x - y;
  };
}
function times(y) {
  return function(x) {
    return x * y;
  };
}
function dividedBy(y) {
  return function(x) {
    return x / y;
  };
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
