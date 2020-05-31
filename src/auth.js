class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login = cb => {
      this.authenticated = true;
      cb();
    }
  
    logout = cb => {
      this.authenticated = false;
      console.log("hihi");
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  