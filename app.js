/*
  Primitive data types:
    Stored directly in the location the variable accesses
    Stored on the stack

  Reference Data types:
    Accessed by reference
    Objects that are stored on the heap
    A pointer to location on the memory

  Primitive Data types:
    1.Strings
    2.Numbers
    3.Boolean
    4.Null
    5.Undefined
    6.Symbols(ES6)

  Reference Data types:
    1.Arrays
    2.Object literals
    3.Functions
    4.Dates
    5.Anything else
*/
//Primitive DAta types

const name = "Jhon Doe";
console.log(typeof name);

const number = 20;
console.log(typeof number);

const binary = true;
console.log(typeof binary);

const nullvalue = null;
console.log(typeof nullvalue);

let notdefined;
console.log(typeof notdefined);

const sym = Symbol();
console.log(typeof sym);

// Reference types - objects
// Array
const movies = ["Seven", "LOTR", "October Sky"];
console.log(typeof movies);

//Object literals
const person = {
  name: "Jhon Doe",
  email: "jhondoe@gmail.com",
};
console.log(typeof person);

// Dates
const today = new Date();
console.log(today);
console.log(typeof today);
