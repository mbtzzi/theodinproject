const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(myArray) {
	let result = 0
	for (let i=0;i<myArray.length;i++){
        result = result + myArray[i];
    }
    return result
};

const multiply = function(a) {
  let result = 1;
    for (let i=0;i<a.length;i++){
        result = result*a[i];
    }
    return result
};

const power = function(a,b) {
  return a**b
};

const factorial = function(a) {
	let result = 1
	for (let i=a;i>0;i--){
        result = result * i;
    }
    return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
