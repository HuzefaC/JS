// Classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName}`;
  }

  // Static method

  static addNumbers(x, y) {
    return x + y;
  }
}

const jon = new Person('Jon', 'Snow');
console.log(jon.greeting());
console.log(Person.addNumbers(2, 3));

// Inheritance and extended classes

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const jamie = new Customer('Jamie', 'Lannister', 696969, 'Gold');

console.log(jamie);

console.log(jamie.greeting());

console.log(Customer.getMembershipCost());
