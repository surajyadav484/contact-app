const ContactInfo = require("../view/contactinfo");
const { addContactInfo } = require("../view/contactinfo");

exports.createContactInfo = async (contactinfo) => {
  return await contactinfo.addContactInfo();
};

exports.getContactInfo = async (contactInfoId) => {
  return await ContactInfo.findAllContactInfo(contactInfoId);
};
