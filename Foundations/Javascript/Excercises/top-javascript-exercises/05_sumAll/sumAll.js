const sumAll = function(num1,num2) {
    if (num1<0 || num2 <0){
        return 'ERROR'
    }
    else if(num1>num2){
        let auxnum3=0;
        auxnum3=num1;
        num1=num2;
        num2=auxnum3;
    }
    if(Number.isInteger(num1) & Number.isInteger(num2)){

        finalSum=0;
        originalnum1=num1
        for (let i=0;i<num2+1-originalnum1;i++){
            finalSum+=num1;
            num1+=1;    
        }
    }
    else {
        return 'ERROR'
    }
    return finalSum

};

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
