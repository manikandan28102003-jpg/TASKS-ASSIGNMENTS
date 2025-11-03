const user = {
  username: "Mani",
  isLoggedIn: true,

  login() {
    if (this.isLoggedIn) {
      this.isLoggedIn = true;
      console.log(`${this.username} has logged in.`);
    } else {
      console.log(`${this.username} is already logged in.`);
    }
  },

  logout() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      console.log(`${this.username} has logged out.`);
    } else {
      console.log(`${this.username} is already logged out.`);
    }
  }
};

// Example usage
user.login();   
user.logout();  
