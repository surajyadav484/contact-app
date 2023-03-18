const { NotFoundError, BadRequest } = require("../../../errors/CustomError");
const {
  getContacts: getContactsService,
} = require("../../contacts/services/contacts");

const db = require("../../../models");
const UserDB = [];

class User {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }

  addUser = async () => {
    const user = await db.User.create({
      name: this.name,
      email: this.email,
      password: this.password,
    });
    return user;
  };

  static findUser = async (userId, contactId) => {
    const user = await db.User.findOne({
      where: { id: userId },
      include: [
        {
          model: db.Contact,
          where: { id: contactId },
          include: { model: db.ContactInfo },
        },
      ],
    });
    if (!user) throw new NotFoundError("User details not found");
    return user;
  };

  modifyUser = async (userId) => {
    let existingUser = await db.User.findOne({ where: { id: userId } });
    if (!existingUser) throw new NotFoundError("User with user Id not found!");

    existingUser.name = this.name ?? existingUser.name;
    existingUser.email = this.email ?? existingUser.email;
    existingUser.password = this.password ?? existingUser.password;
    const updatedUser = await existingUser.save();
    return updatedUser;
  };

  static findAllUsers = async () => {
    const users = await db.User.findOne();
    return users;
  };

  findUserByEmail = (email) => {
    const existingUser = UserDB.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (!existingUser) throw new NotFoundError("User does not exist!");
    //   console.log({ existingUser });
    return existingUser;
  };

  static deleteUser = async (userId) => {
    const deletedUser = await db.User.destroy({ where: { id: userId } });
    if (!deletedUser) throw new BadRequest("Error in deleting the record");
    return deletedUser;
  };
}

module.exports = {
  User,
  UserDB,
};
