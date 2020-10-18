// Global scope
var a = 10;
let b = 20;
const c = 30;

// Function level scope
function test() {
  var a = 40;
  let b = 50;
  const c = 60;

  console.log('Function scope: ', a, b, c);
}
test();

//Block level scope
if (true) {
  var a = 70;
  let b = 80;
  const c = 100;

  console.log('Block scope: ', a, b, c);
}

console.log('Global scope: ', a, b, c);

// If a var type variable is resassigned in block level scope it permenantly changes its value
// While const and let do not. They keep the original glocal scope value when the leave the local scope
