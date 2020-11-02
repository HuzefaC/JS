// HTTP Statuses
// 200 - Ok
// 403 - Forbidden
// 404 - Not found

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Intantiate XHR

  const xhr = new XMLHttpRequest();

  // Open file
  xhr.open('GET', 'data.txt', true);

  // Action to take when the loading process is done
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
}
