//Replace Elements

// Creating a new title element to replace the old one

const newTitle = document.createElement('h2');

newTitle.id = 'task-title';

newTitle.textContent = 'New Title';

// Getting old title
const oldTitle = document.getElementById('task-title');

const card = document.querySelector('.card-action');

card.replaceChild(newTitle, oldTitle);

console.log(newTitle);

// Remove elements

const lis = document.querySelectorAll('li');
lis[0].remove();

const list = document.querySelector('ul');
list.removeChild(lis[1]);
