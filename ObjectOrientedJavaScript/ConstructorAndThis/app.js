// ES5 way of doing classes

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  this.age = function () {
    const currentDate = new Date();
    const diff = currentDate - this.dob;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const jackSparrow = new Person('Jack', 'Sparrow', 06 - 17 - 1996);

console.log(jackSparrow.age());
