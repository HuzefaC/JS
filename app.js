//to string
console.log("To string:-");
let valb = String(true);
let valnum = 5;
let val1 = valnum.toString();
console.log(typeof val1);
console.log(typeof valb);

//to Int
console.log("To int:-");
let valstr = "50";
valstr = Number(valstr);
let valstr1 = parseInt("55");
console.log(typeof valstr);

// Type coercion is when JS converts the variable types implicitly
console.log("Type coercion example:-");
let a = "5";
let b = 10;
let sum = a + b;
console.log(sum);
console.log(typeof sum);

/*Note:-
1. This example shows that parseInt() tries to convert the value to the last character that could be converted to an integer. The trailing whitespaces and characters are ignored as they are not valid. The Number() function on the other hand just returns NaN.
Example:- let string = '10.6 objects'; 
          let number1 = parseInt(string); o/p = 10
          let number2 = Number(string);  o/p = NaN
2. This example shows the difference that parseInt() only returns an integer value whereas Number() returns all the digits including floating points.
Example:- let string = '3.1415'; 
          let number1 = parseInt(string); o/p = 3
          let number2 = Number(string); o/p = 3.1415
3. This example shows the working of the radix parameter in parseInt(). The string passed is parsed with the base of 2. This returns the value as 12. On the other hand, Number() returns the value in the string as-is.
Example:- let string = '100'; 
          let number1 = parseInt(string, 2); o/p = 4
          let number2 = Number(string); o/p = 100
        
*/
