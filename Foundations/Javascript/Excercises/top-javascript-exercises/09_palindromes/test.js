string = "plommolp"
derecha=string.length
izquierda=0
string = string.replace(/\s/g,"");
    let arrayWord=[];
    let reverseArray=[];
    for (i=0;i<string.length;i++){
        j = string.length-i;
        arrayWord.push(string.substring(i,i+1))
        reverseArray.push(string.substring(j-1,j))
    }
    for (i=0;i<string.length;i++){
        if (arrayWord[i]==reverseArray[i]){
            esPalindromo = true
        }
        else esPalindromo = false
    }
    return esPalindromo

console.log(arrayWord)
console.log(reverseArray)