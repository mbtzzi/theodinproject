// Write a function called add7 that takes one number and returns that number + 7.
function add7(num1){
    return num1 + 7
}

console.log(add7(5))
console.log(add7(9))


// Write a function called multiply that takes 2 numbers and returns their product.

function multiplication(num1,num2){
    return num1*num2
}

console.log(multiplication(5,6))


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function mayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1,string.length).toLowerCase()
}

console.log(mayuscula("SoY MayS"))

// Write a function called lastLetter that takes a string and returns the very last letter of that string:  lastLetter("abcd") should return "d"

function lastLetter(string){
    return string.charAt(string.length-1)
}

console.log(lastLetter("SoYe"))