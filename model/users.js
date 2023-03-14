class User{
    constructor(name, email){
        this.name = name,
        this.email = email   
    }
    setUserId = (userId) =>{
        this.userId = userId
    }

    // static getUser(user){
    //     return user;
    // }
}

module.exports = User;