const { Op } = require("sequelize");
const { NotFoundError } = require("../../../errors/CustomError");
const db = require("../../../models/");
const ContactsDB = [];

class Contacts {
  constructor(contactName, userId) {
    (this.contactName = contactName),
      // this.contactInfo = contactInfo;
      (this.userId = userId);
  }

  addContact = async () => {
    console.log(this);
    const contact = await db.Contact.create({
      contactName: this.contactName,
      // contactInfo: this.contactInfo,
      userId: this.userId,
    });
    return contact;
  };

  findAllContacts = () => {
    console.log(ContactsDB.length);
    return ContactsDB;
  };

  static findContacts = async (userId) => {
    const contacts = await db.Contact.findAll({ where: { userId } });
    if (!contacts)
      throw new NotFoundError("Contacts with provided user id not found!");
    return contacts;
  };

  modifyContact = async (contactId, userId) => {
    let existingContact = await db.Contact.findOne({
      where: { [Op.and]: [{ id: contactId }, { userId }] },
    });
    if (!existingContact)
      throw new NotFoundError("Contact with contact Id not found!");
    //verify that the user is current user

    console.log(existingContact);
    console.log(this.contactName);
    existingContact.contactName =
      this.contactName ?? existingContact.contactName;

    const updatedContact = await existingContact.save();
    return updatedContact;
  };
}

module.exports = {
  ContactsDB,
  Contacts,
};

// exports.findContact = (contact) =>{
//     return ContactsDB.push(contact);
// }
