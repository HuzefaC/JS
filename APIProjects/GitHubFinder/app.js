// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get User search query
  const userText = e.target.value;
  if (userText !== '' || userText !== null) {
    console.log(userText);
  }
});
