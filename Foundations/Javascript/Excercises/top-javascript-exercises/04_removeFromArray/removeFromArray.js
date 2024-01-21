const removeFromArray = function(array, ...valuesToDelete) {
    for (let i = 0 ;i < array.length ;i++){
        if (valuesToDelete.includes(array[i])){
            array.splice(i,1)
            i--
        }
    }   
    return array;
};

console.log(removeFromArray(["Monday","Tuesday","Wednesday","Thursday","Friday"],"Wednesday", "Monday"))

// Do not edit below this line
module.exports = removeFromArray;
