const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

const findTheOldest = function(people) {
    let maxAge = 0;
    let personaMayor = []
    for (let i=0;i<people.length;i++){
        age = people[i].yearOfDeath-people[i].yearOfBirth
        if (age>maxAge){
            maxAge = age
            personaMayor = people[i]
        }
    }
    return personaMayor
};

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
