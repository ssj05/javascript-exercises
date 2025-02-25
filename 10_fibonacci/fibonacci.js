const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  if (n === 0 || n === "0") {
    return 0;
  }
  let a = 1;
  let b = 1;

  for (let i = 0; i < parseInt(n); i++) {
    let temp = a + b;
    a = b;
    b = temp;
    if (i === n - 2 || parseInt(n) === 1) {
      return a;
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;
