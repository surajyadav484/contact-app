const { NotFoundError, BadRequest } = require("../../../errors/CustomError");
const db = require("../../../models");
const { ContactsDB } = require("../../contacts/view/contacts");

// const ContactInfo = [];

class ContactInfo {
  constructor(number, type, userId, contactId) {
    this.number = number;
    this.type = type;
    this.userId = userId;
    this.contactId = contactId;
  }

  // setContactInfoId(contactInfoId) {
  //   this.contactInfoId = contactInfoId;
  // }

  addContactInfo = async (info) => {
    console.log("userId", this.userId);
    const contactInfo = await db.ContactInfo.create(this);
    if (!contactInfo) throw new BadRequest("Unable to create the contact");
    return contactInfo;
  };

  static findAllContactInfo = async (contactId) => {
    const contactInfoList = await db.ContactInfo.findAll({
      where: { contactId },
    });
    if (!contactInfoList)
      throw new NotFoundError(
        "Contact info list with provided contact Id does not exists"
      );
    return contactInfoList;
  };
}

module.exports = ContactInfo;

// exports.findContactInfo = (userId, contactId) =>{
//     ContactInfo.push(info);
// }
