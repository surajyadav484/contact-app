const { NotFoundError } = require("../../../errors/CustomError");
// const user = require("../../../models/user");
const ContactInfo = require("../../contactinfo/view/contactinfo");
const { Contacts } = require("../../contacts/view/contacts");
const { User } = require("../view/users");

exports.createUser = async (user) => {
  console.log("user", user);
  //const { userId, name, email, password } = user;
  const returnedUser = await user.addUser();
  return returnedUser;
};

exports.getUser = async (userId) => {
  const user = await User.findUser(userId);
  return user;
};

exports.getAllUsers = async () => {
  // console.log(userId);
  return await User.findAllUsers();
};

exports.getUserContacts = async (userId, contactId) => {
  const users = await User.findUser(userId, contactId);
  return users;
};

exports.updateUser = async (userId, user) => {
  const updatedUser = await user.modifyUser(userId);
  return updatedUser;
};
exports.getUserbyEmail = (email) => {
  console.log("service", email);
  return findUserByEmail(email);
};

exports.removeUser = async (userId) => {
  return await User.deleteUser(userId);
};
