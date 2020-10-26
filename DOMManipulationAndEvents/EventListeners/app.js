// Removing all the lis from the ul
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  console.log(e);

  const lis = document.querySelectorAll('li');

  lis.forEach((li) => {
    li.remove();
  });
}
