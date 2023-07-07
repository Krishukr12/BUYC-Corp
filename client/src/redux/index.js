function outer() {
  let a = 10;
  function inner(b) {
    return a + b;
  }
  return inner;
}

const fun = outer();

console.log(fun(10));
