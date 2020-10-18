// Window Methods / Objects / Properties

// console.log('Console is a window object');

// // Prompt
// const input = prompt();
// // Alert
// alert(input);

// // Confirm
// confirm('Confirm?');

// Properties
let val;

// Window height and width
let oh = window.outerHeight;
let ow = window.outerWidth;
console.log(`Outer Height: ${oh} \n Outer Width: ${ow}`);

let ih = window.innerHeight;
let iw = window.innerWidth;
console.log(`Inner Height: ${ih} \n Inner Width: ${iw}`);

// Scroll points
let sy = window.scrollY;
let sx = window.scrollX;
console.log(`Scroll Y: ${sy} \n Scroll X: ${sx}`);

// Location object
let loc = window.location;
console.log(loc);

// History object
//window.history.go();

// Navigator object
let nav = window.navigator;
console.log(nav);
