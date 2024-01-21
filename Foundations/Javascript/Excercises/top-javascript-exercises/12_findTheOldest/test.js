//Get today's year
//let ageOfBirth = 1993
//let today = new Date();
//let currentYear = today.getFullYear()
//console.log(year)//

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

    let maxAge = 0;
    let personaMayor = []
    for (let i=0;i<people.length+1;i++){
        age = people[i].yearOfDeath-people[i].yearOfBirth
        if (age>maxAge){
            maxAge = age
            personaMayor = people[i]
        }
    }

console.log(personaMayor)



