// SETS = Store unique value of any type

const set1 = new Set();

set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(null);
set1.add(undefined);
set1.add(Symbol());

const set2 = new Set([1, 1, 2, 3, 3, 4, 5]);
console.log(set2);
