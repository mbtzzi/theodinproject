const removeSpecialCharacters = function(string){
    const regex = /[^a-zA-Z0-9\s]/g
    replacedString = string.replace(regex,"")
    return replacedString
}

const palindromes = function (string) {
    derecha=string.length
    izquierda=0
    string = string.replace(/\s/g,"");
    string = removeSpecialCharacters(string);
    string = string.toLowerCase();
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
        else {esPalindromo = false;
            break}
    }
    return esPalindromo
};

console.log(palindromes("r3ace3car"))


// Do not edit below this line
module.exports = palindromes;
