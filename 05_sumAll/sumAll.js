const sumAll = function(num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }
  let sum = 0;

  let firstNum = 0;
  let lastNum = 0;
  if (num1 > num2) {
    firstNum = num2;
    lastNum = num1;
  } else {
    firstNum = num1;
    lastNum = num2;
  }
  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
