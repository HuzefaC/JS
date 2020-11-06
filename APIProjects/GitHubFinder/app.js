// Init Github
const gitHub = new GitHub();

// Init UI
const ui = new UI();
// Search Input
const searchUser = document.getElementById('searchUser');
// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get User search query
  const userText = e.target.value;

  if (userText !== '' || userText !== null) {
    // Make a http call
    gitHub.getUser(userText).then((data) => {
      if (data.profileData.message === 'Not Found') {
        // Show alert
        //ui.alert(data.profileData);
        console.log(data);
      } else {
        // Show Profile
        ui.showProfile(data.profileData);
      }
    });
  } else {
    // Clear Profile
  }
});
