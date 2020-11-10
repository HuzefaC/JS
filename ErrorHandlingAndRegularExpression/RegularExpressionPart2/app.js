let regex;

// Literal characters
regex = /hello/;
regex = /hello/i; // i flag makes the expression case insensitive

// Metacharacters Symbols
regex = /^h/i; // Must start with h
regex = /d$/i; // Must end with d
regex = /^hello$/i; // Must start and end with
regex = /h.llo$/i; // Matches any ONE character
regex = /h*o/i; // Matches any character
regex = /gre?a?y/i; // Optional character
regex = /gre?a?y\?/i; // Escape characters

// Brackets [] - Character sets
regex = /gr[ae]y/i; // Must be an a or e
regex = /[GF]r[ae]y/; // Must be an a or e
regex = /gr[ae]y/i; // Must be an G or F
regex = /[A-Z]ray/i; // Mathces any Uppercase
regex = /[a-z]ray/i; // Mathces any Lowecase
regex = /[A-Za-z]ray/i; // Mathces any case
regex = /[0-9]ray/i; // Mathces any digits

// Braces {} - Quantifiers
regex = /Hel{2}o/i; // Letter before must {} occur {m} times
regex = /Hel{2,4}o/i; // Letter before must {} occur {m} times
regex = /Hel{2, }o/i; // Letter before must occur atleast {m} times

// Paranthesis - Used for Grouping
regex = /([0-9]x){3}/i; // Number between 0-9 followed by x three times

// Shorthand character classes
regex = /\w/; // Word character - alphanumeric or _
regex = /\w+/; // + means one or more
regex = /\W/; // Non-Word character i.e anything other than alphanumeric or _
regex = /\d+/; // Match any digits
regex = /\D/; // Non Digit
regex = /\s/; // Match the whitespace characters
regex = /\S/; // Match the Non-whitespace characters
regex = /\S/; // Match the Non-whitespace characters
regex = /Hell\b/i; // Word boundry

// Assertions
regex = /x(?=y)/; // Match x only if followed by y

const str = 'Hello, welcome to hell';
//const result = ;

function regexTest(regex, str) {
  if (regex.test(str)) {
    console.log(`${str} matches ${regex.source}`);
  } else {
    console.log(`${str} does not match ${regex.source}`);
  }
}

regexTest(regex, str);
