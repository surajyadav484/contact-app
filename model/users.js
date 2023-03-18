class User {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }
  setUserId = (userId) => {
    this.userId = userId;
  };

  // static getUser(user){
  //     return user;
  // }
}

module.exports = User;
