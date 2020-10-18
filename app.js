const passMarks = 45;
let val;

//Conditional statements
//If statement

val = 45;
if (val == 45) {
  console.log(`Value is 45`);
}

//If-else
val = 50;
if (val == 45) {
  console.log(`Value is 45`);
} else {
  console.log('Value is not 45');
}
//Else-if
val = 75;
if (val == 45) {
  console.log(`Value is 45`);
} else if (val == 50) {
  console.log('Value is 50');
} else {
  console.log('Value is neither 45 nor 50');
}

// use of == and ===
val = '45';

if (val === 45) {
  console.log('Value is 45');
} else {
  console.log('Value is not 45');
}

if (val == 45) {
  console.log(`Value is 45`);
} else {
  console.log('Value is not 45');
}

//Logical operators
if (val >= 45) {
  console.log('Value is greater than equal to 45');
} else {
  console.log('Value is less than 45');
}

if (val <= 45) {
  console.log('Value is less than equal to 45');
} else {
  console.log('Value is greater than 45');
}

//And, OR operators
const a = 50,
  b = 30;

if (a === 50 && b === 30) {
  console.log('a = 50 and b = 30');
} else {
  console.log('Either a or b are different');
}

if (a === 70 || b === 40) {
  console.log('Either a or b are different');
} else {
  console.log('Both a or b are different');
}

//Ternary operator
console.log(val === 45 ? 'Correct' : 'Incorrect');

//Switch statement
const color = 'red';

switch (color) {
  case 'red':
    console.log('Red');
    break;

  case 'blue':
    console.log('Blue');
    break;

  default:
    console.log('Neither Red nor Blue');
    break;
}
