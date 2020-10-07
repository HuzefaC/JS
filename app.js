// Simple math
const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
console.log("Add", val);

val = num1 - num2;
console.log("Sub", val);

val = num1 * num2;
console.log("Multiply", val);

val = num1 / num2;
console.log("Divide", val);

val = num1 % num2;
console.log("Modulus", val);

// Math object

val = Math.PI;
console.log("PI ", val);

val = Math.round(4.3);
console.log("Round ", val);

val = Math.ceil(4.3);
console.log("Ceil ", val);

val = Math.floor(4.3);
console.log("Floor ", val);

val = Math.sqrt(64);
console.log("Square Root ", val);

val = Math.pow(8, 2);
console.log("Square ", val);

val = Math.min(1, 2, 44, 55, 66);
console.log("Minimum in an array ", val);

val = Math.max(20, 11, 10, 15);
console.log("Maximum in an array ", val);

val = Math.random();
console.log("Random ", val);

val = Math.ceil(Math.random() * 10);
console.log("Random int within 0-10 ", val);
