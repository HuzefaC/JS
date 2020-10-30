// This is not used very often

// String
const name1 = 'Jeff';

const name2 = new String('Jeff');

console.log(name1, name2);

// Number

const num1 = 5;
const num2 = Number(4);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

console.log(getSum1(2, 1));

const getSum2 = new Function('x', 'y', 'return x + y;');

console.log(getSum2(1, 1));

// Objects
const john1 = { name: 'John1' };
const john2 = new Object({ name: 'John2' });
console.log(john2);

//  Array
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);
