//For loop

let i;
console.log('For Loop');
for (i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
console.log('While Loop');
i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Do while
i = 0;
console.log('Do while Loop');
do {
  console.log(i);
  i++;
} while (i < 10);

//Array looping

const animals = ['Dog', 'Cat', 'Cow', 'Goat', 'Horse'];

for (i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//Foreach
console.log('For each');
animals.forEach((animal) => console.log(animal));

//Map

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Trent' },
];

const ids = users.map((user) => user.id);

console.log('Map');
console.log(ids);

//FORIN

const player = {
  firstName: 'Mesut',
  lastName: 'Ozil',
  age: 32,
  position: 'CAM',
};

console.log('For In');

for (let x in player) {
  console.log(`${x} : ${player[x]}`);
}
