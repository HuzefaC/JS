let val;

const today = new Date();
val = today;
console.log(val);

const birthDate = new Date('10 13, 2014 11:13:00');
val = birthDate;
console.log(val);

val = today.getMonth();
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);

val = today.getMilliseconds();
console.log(val);

birthDate.setMonth(6);
birthDate.setFullYear(1996);
birthDate.setDate(17);
birthDate.setHours(3);
birthDate.setMinutes(30);
birthDate.setSeconds(25);

console.log(birthDate);
