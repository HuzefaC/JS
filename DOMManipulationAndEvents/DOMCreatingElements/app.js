// We have to create and add li element to the dom

// Create li element
const li = document.createElement('li');

// Add classname to the li element
li.className = 'collection-item';

// Add id to the li element
li.id = 'new-id';

// Add content to the li element
li.textContent = 'Hello World';

// Adding link and icon to the li element
const a = document.createElement('a');
a.className = 'delete-item secondary-content';
a.href = '#';
a.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(a);

// Add li to the ul element
document.querySelector('ul.collection').appendChild(li);

console.log(li);
