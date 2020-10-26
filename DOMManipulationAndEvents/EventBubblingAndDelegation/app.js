// // Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });

// Event Delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  //const delItem = e.target;
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete Item');
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}
