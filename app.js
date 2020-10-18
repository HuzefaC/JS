// Function declaration

function getFirstName(firstName) {
  return firstName;
}

// Fat arrow function
const getLastName = (lastName) => {
  return lastName;
};

console.log(getFirstName('John'), getLastName('Cena'));

//Immediately Invokable Function Expression - IIFEs

(function () {
  console.log('IIFEs');
})();

//Property method

const todo = {
  add: function () {
    console.log('Property Method add...');
  },
};

todo.delete = function () {
  console.log('Property Method delete...');
};

todo.add();
todo.delete();
