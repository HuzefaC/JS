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

  if (userText !== '') {
    // Make a http call
    gitHub.getUser(userText).then((data) => {
      if (data.profileData.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profileData);
        ui.showRepos(data.repoData);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
