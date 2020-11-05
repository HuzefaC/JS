async function getUsers() {
  // Await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it's resolved
  const data = await response.json();

  // only proceed once the second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
