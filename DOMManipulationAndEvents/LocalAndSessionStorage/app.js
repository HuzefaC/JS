// // Set local storage item
// localStorage.setItem('name', 'John Cena');

// // Set session storage item
// sessionStorage.setItem('name', 'John Cena');

// // Remove from local storage item
// localStorage.removeItem('name');

// // Remove from session storage item
// sessionStorage.removeItem('name');

// // Get from local storage
// localStorage.setItem('name', 'John Cena');
// const name = localStorage.getItem('name');
// console.log(name);

// // clear local storage
// localStorage.clear();

// Add data to local storage from the form submit

document.querySelector('form').addEventListener('submit', submitFunction);

function submitFunction(e) {
  //console.log(e.target[0].value);
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved');

  e.preventDefault();
}
