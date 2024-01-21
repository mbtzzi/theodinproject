const convertToCelsius = function(temp) {
  if (Number.isInteger(temp)){
    temp = Math.round((((temp-32)*5)/9)*10)/10

  }
  else {
    'ERROR'
  } 
  return temp
};

const convertToFahrenheit = function(temp) {
  temp.Replace(".",",")
  if (Number.isInteger(temp)){
    return Math.round(((temp * 9) / 5 + 32) * 10) / 10;
  }
  else {
    'ERROR'
  }
};

console.log(convertToFahrenheit(73,2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
