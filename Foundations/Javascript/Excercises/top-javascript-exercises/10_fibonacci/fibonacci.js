const removeLettersAndConvert = function(frase){
    const regex = /[a-zA-Z\s]/g;
    let replacedString = frase.replace(regex,"");
    let newNumber = parseInt(replacedString,10) | 0; 
    return newNumber
}

const fibonacci = function(numero) {
    try {
        if (typeof(numero) === 'string') {
            numero = removeLettersAndConvert(numero);
        }
        if (numero < 0){
            throw new Error;
        }

        let acumul = 0;
        let firstLastNumber = 1;
        let secondLastNumber = 0;
        acumul = secondLastNumber + firstLastNumber;
        for (let i=0;i<numero-1;i++){
            acumul = secondLastNumber + firstLastNumber;
            secondLastNumber = firstLastNumber;
            firstLastNumber = acumul;
        }

        return acumul;}
    catch (error) {
        return "OOPS"
    }
}

console.log(fibonacci(1));    

// Do not edit below this line
module.exports = fibonacci;
