let regex;

regex = /hello/i; // i flag makes the expression case insensitive

console.log(regex);
console.log(regex.source);

// exec() - Finds the regex pattern in the input string and returns result in an array or null
const result = regex.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
const test = regex.test('hello world');

console.log(test);

// returns result array or null
const match = 'Hello there'.match(regex);
console.log(match);

// returns the index of the first match if not found returns -1
const search = '   Hello there'.search(regex);
console.log(search);

// returns new string with some or all matches of a pattern
const replace = 'Hello there'.replace(regex, 'hi');
console.log(replace);
