const convertToCelsius = function(tempF) {
  let result = ((tempF -32) * 5)/9;
  let roundedResult = Math.round(result * 10)/10;
  return roundedResult;
};

const convertToFahrenheit = function(tempC) {
  let fResult = ((tempC * 9)/5) + 32;
  let roundedFResult = Math.round(fResult * 10)/10;
  return roundedFResult
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
