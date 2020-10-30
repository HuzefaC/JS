function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

// Prototype
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
