// JSON stands for JavaScript Object Notation

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPIData);

function getText(e) {
  fetch('data.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getJSON(e) {
  fetch('data.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getAPIData(e) {
  fetch('https://api.github.com/users/1')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
