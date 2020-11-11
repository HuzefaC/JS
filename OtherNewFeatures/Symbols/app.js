// Create Symbol

const s1 = Symbol();
const s2 = Symbol('s2');
const s3 = Symbol('s2');

console.log(s1);
console.log(s2);
console.log(typeof s2);

// No two symbols can ever be equal
console.log(s2 === s3);

// Unique object keys
const k1 = Symbol();
const k2 = Symbol('s2');
const k3 = Symbol('s3');

const myObj = {};

myObj[k1] = 'Prop1';
myObj[k2] = 'Prop2';

console.log(myObj[k1]);

// Do more research about how these things are used not enough explanation
