// Object Literals
const person = {
  firstName: 'John',
  lastName: 'Cena',
  yearOfBirth: 1996,
  age: function () {
    return 2020 - this.yearOfBirth;
  },
  hobbies: ['Wrestling', 'Wight Lifting'],
};

let val;

console.log(person.age());
