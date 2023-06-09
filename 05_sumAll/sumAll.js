const sumAll = function (num1, num2) {
  let result = 0;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num2 > num1) {
      for (let i = num1; i <= num2; i++) {
        result += i;
      }
    } else if (num1 > num2) {
      for (let i = num2; i <= num1; i++) {
        result += i;
      }
    }
  }
  else {
    return "ERROR";
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
