const multiply = function(a) {
    let result = 1;
    for (let i=0;i<a.length;i++){
        result = result*a[i];
    }
    return result
  };

console.log(multiply([2,4,2]))