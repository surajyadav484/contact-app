const { findAllContacts, findContacts, Contacts } = require("../view/contacts");

exports.createContact = async (contact) => {
  console.log("inside cotact service");
  return await contact.addContact();
};

exports.updateContact = async (contactId, userId, contacts) => {
  const updatedContacts = contacts.modifyContact(contactId, userId);
  return updatedContacts;
};

exports.getAllContacts = () => {
  return findAllContacts();
};

exports.getContacts = async (userId) => {
  const contacts = await Contacts.findContacts(userId);
  return contacts;
};
