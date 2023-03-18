const { BadRequest, NotFoundError } = require("../../../errors/CustomError");
// const User = require("../../../model/users");
const {
  createUser: createUserService,
  getUserbyEmail,
  getUserContacts: getUserContactsService,
  updateUser: updateUserService,
  removeUser: removeUserService,
} = require("../services/users");
const {
  getUser: getUserService,
  getAllUsers: getAllUsersService,
} = require("../services/users");
const jwt = require("jsonwebtoken");
const JwtToken = require("../../../middleware/jwt");
const { User } = require("../view/users");

exports.login = (req, res, next) => {
  try {
    console.log("inside login");
    const { email, password } = req.body;
    console.log(email, password);
    if (!(email && password))
      throw new BadRequest("Username or Password is empty!");

    const existingUser = getUserbyEmail(email);

    // console.log(typeof existingUser.password, "===", typeof password);
    // console.log(existingUser.password, "===", password);

    if (existingUser.password !== password) {
      throw new BadRequest("Entered credentials are invalid!");
    }

    const user = new JwtToken(email, password);
    const token = user.generateToken();
    // console.log(token);
    res.cookie("authorization", token);

    res.send("logged In!");
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      throw new BadRequest("one on more fields are missing ");
    }
    const user = new User(name, email, password);
    res.json(await createUserService(user));
  } catch (error) {
    // res.json(error.message)
    next(error);
  }
};

exports.getUser = (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      throw new BadRequest("user is not found ");
    }
    const user = getUserService(userId);
    console.log("get", user);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    if (!users) throw new BadRequest("Users not found!");
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserContacts = async (req, res, next) => {
  try {
    const { userId, contactId } = req.params;
    if (!(userId && contactId))
      throw new NotFoundError("UserId and contactId not found!");
    const userDetails = await getUserContactsService(userId, contactId);
    console.log({ userDetails });
    res.json(userDetails);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  //   console.log("inside controller");
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    if (!userId) throw new NotFoundError("User Id not entered correctly!");
    const user = new User(name, email, password);
    const updatedUser = await updateUserService(userId, user);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.removeUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new NotFoundError("entered user id is not valid");
    res.json(await removeUserService(userId));
  } catch (error) {
    next(error);
  }
};
