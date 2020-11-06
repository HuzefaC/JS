class GitHub {
  constructor() {
    this.client_id = '091517025469750b8267';
    this.client_secret = '852125dd6f2e0a0b380fe59936cc91d0417f98ec';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return { profileData, repoData };
  }
}
