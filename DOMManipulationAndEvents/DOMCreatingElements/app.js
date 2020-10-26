let val;

const list = document.querySelector('ul.collection.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get childnodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute(depricated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;

val = list.children[1];

list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children;

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Child element count
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
