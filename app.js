//Create arrays
const numbers = [12, 15, 20, 33, 40];
const numbers1 = new Array(13, 16, 22, 35, 44);
const animals = ['Dogs', 'Cats', 'Tigers', 'Lions', 'Horse'];
const mixed = ['Apple', 20, true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length

val = numbers.length;
console.log(val);

// Check is array
val = Array.isArray(numbers);
console.log(val);

// get single values
val = numbers[0];
console.log(val);

// Insert into array
numbers[5] = 100;
numbers[7] = 110;
console.log(numbers);

// Find index of value in array
val = numbers.indexOf(110);
console.log(val);

//Add at end of array
numbers.push(350);
console.log(numbers);

// Add at front of array
numbers.unshift(10);
console.log(numbers);

// Remove from end
numbers.pop();
console.log(numbers);

// Remove from start
numbers.shift();
console.log(numbers);

// Remove a range of values from array
numbers.splice(1, 3);
console.log(numbers);

// Reverse the array
numbers.reverse();
console.log(numbers);

// Concat arrays
val = numbers.concat(numbers1);
console.log(val);

// Sorting arrays
val = animals.sort(); // Sort method sorts based on the first character of the sequence hence we need to use some thing else for sorting numbers as it does not work
console.log(val);

// Sort for numbers
val = numbers.sort((x, y) => x - y);
console.log(val);

// Reverse Sort for numbers
val = numbers.sort((x, y) => y - x);
console.log(val);

// Find (returns the first number in the array that satisfy)
val = numbers.find((num) => {
  return num < 50;
});
console.log(val);
