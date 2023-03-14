const {addUser, findUser, findAllUsers} = require("../view/users");

exports.createUser = (user) =>{
     console.log("user", user);
    const {name, email, contacts, userId} = user;
    return addUser({userId, name, email});
}

exports.getUser = (userId) =>{
    // console.log(userId);
    return findUser(userId);
}
exports.getAllUsers = () =>{
    // console.log(userId);
    return findAllUsers();
}

