const http = new EasyHttp();

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function (
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Create the Data

const data = {
  title: 'Custom Post title',
  body: 'Custom Post body',
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
