const http = new EasyHTTP();

// GET users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Create the Data

const data = {
  title: 'Custom Post title',
  body: 'Custom Post body',
};

// Create users
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Update users
// http
//   .put('https://jsonplaceholder.typicode.com/users/1', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete users
http
  .delete('https://jsonplaceholder.typicode.com/users/1')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
