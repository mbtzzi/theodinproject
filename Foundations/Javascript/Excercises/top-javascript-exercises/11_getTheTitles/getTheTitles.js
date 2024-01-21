const getTheTitles = function(books) {
    let newArray = [];
    
    for (let i=0;i<books.length;i++){
        newArray.push(books[i].title)
    }

    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
