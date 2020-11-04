// JSON stands for JavaScript Object Notation

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type = "number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let output = [];
      const response = JSON.parse(this.responseText);
      let jokes = response.value;

      console.log(jokes.joke);

      if (response.type === 'success') {
        if (number > 1) {
          jokes.forEach((joke) => {
            output += `<li>${joke.joke}</li>`;
          });
          document.querySelector('.jokes').innerHTML = output;
        } else {
          output += `<li>${jokes.joke}</li>`;
          document.querySelector('.jokes').innerHTML = output;
        }
      } else {
        output += 'Something went wrong';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.onerror = function () {
    console.log('Some error...');
  };

  xhr.send();
  e.preventDefault();
}
