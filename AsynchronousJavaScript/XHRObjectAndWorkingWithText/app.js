// HTTP Statuses
// 200 - Ok
// 403 - Forbidden
// 404 - Not found

// 0 	UNSENT 	Client has been created. open() not called yet.
// 1 	OPENED 	open() has been called.
// 2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
// 3 	LOADING 	Downloading; responseText holds partial data.
// 4 	DONE 	The operation is complete.

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Intantiate XHR

  const xhr = new XMLHttpRequest();

  // Open file
  xhr.open('GET', 'data.txt', true);

  // Action to take when the loading process is done
  xhr.onload = function () {
    if (xhr.status === 200) {
      //console.log(xhr.responseText);
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${xhr.responseText}</h1>`;
    }
  };

  // Older Syntax
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (xhr.status === 200 && xhr.readyState === 4) {
  //     console.log(xhr.responseText);
  //   }
  // };

  // Optional - Used for Loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  };

  // Runs if there are any errors
  xhr.onerror = function () {
    console.log('Fetching error...');
  };
  xhr.send();
}
