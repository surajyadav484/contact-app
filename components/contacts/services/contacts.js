const {addContact, findAllContacts, findContacts} = require("../view/contacts");

exports.createContact = (contact) =>{
    let {contactName, userId, contactInfo,contactId} = contact;
    // console.log(contactName, contactInfo, userId, contactId);
    // console.log(contact);
    return addContact({contactId, contactName, contactInfo:contactInfo?contactInfo:[], userId});
}

exports.getAllContacts = () =>{
    return findAllContacts();
}

exports.getContacts = (userId) =>{
    console.log({userId});
    return findContacts(userId);
}