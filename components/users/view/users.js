const {getContacts:getContactsService} = require("../../contacts/services/contacts")

const UserDB = [];

addUser = (user) =>{
    return UserDB.push(user);
}

findUser = (userId) =>{
    const user = UserDB.find((user)=> user.userId === (+userId));
    const contacts = getContactsService(userId);
    console.log({contacts});
    user.contacts = contacts;
    return user;
}

findAllUsers = () =>{
    return UserDB;
}

module.exports = {addUser, findUser, findAllUsers, UserDB}


