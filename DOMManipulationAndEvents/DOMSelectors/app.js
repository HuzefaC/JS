//Single element selectors

// Get the element
console.log(document.getElementById('task-title'));

// Get things inside element
console.log(document.getElementById('task-title').id);

// Change styling
document.getElementById('task-title').style.background = '#333';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';

// Query Selector

console.log(document.querySelector('#task-title'));

document.querySelector('#task-title').style.color = 'red';
document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'cyan';
document.querySelector('li:nth-child(4)').style.color = 'magenta';
