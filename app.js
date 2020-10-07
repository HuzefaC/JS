const firstName = "William";
const lastName = "Jhonson";
const age = 36;

let val;

// Concatenation
val = firstName + " " + lastName;
console.log("Concatenation ", val);

// Append
val = "Jhon ";
val += "Cena";
console.log("Append ", val);

// Escaping
val = "That's awesome";
console.log("Escape char ", val);

// Properties and Methods
val = firstName.length;
console.log("Length ", val);

val = firstName.toUpperCase();
console.log("Uppercase ", val);

val = firstName.toLowerCase();
console.log("Lowercase ", val);

val = firstName.charAt("2");
console.log("char at  ", val);

val = firstName.indexOf("l");
console.log("Index of ", val);

val = firstName.lastIndexOf("l");
console.log("Last Index ", val);

val = firstName.substring(0, 4);
console.log("Substring ", val);

val = firstName.slice(-3);
console.log("Slice ", val);
