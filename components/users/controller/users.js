const User = require('../../../model/users')
const {createUser:createUserService} = require("../services/users");
const {getUser: getUserService, getAllUsers} = require("../services/users")

exports.createUser = (req,res) =>{
    try {
        
        const {name, email } = req.body;
        if(!name || !email){
            throw new Error("one on more fields are missing ")
        }
        const user = new User(name, email, []);
        user.setUserId(getAllUsers().length + 1);
        res.json(createUserService(user));
    } catch (error) {
        res.json(error.message)
        
    }

}

exports.getUser = (req, res) => {
    
   try {
    const {userId} = req.params;
    if(!userId){
        throw new Error("user is not found ")
    }
    const user = getUserService(userId);
    console.log("get", user);
    res.json(user)
   } catch (error) {
    res.json(error.message)
   }
    
}