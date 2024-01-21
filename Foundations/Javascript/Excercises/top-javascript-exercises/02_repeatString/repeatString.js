const repeatString = function(word,times) {
    let longWord=''
    if (times < 0){
        return 'ERROR'
    }
    else{
        for (let i=0; i< times; i++) {
             longWord += word
        }
        return longWord
    }
};

// Do not edit below this line
module.exports = repeatString;
