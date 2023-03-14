const ContactsDB = [];

addContact = (contact) =>{
    return ContactsDB.push(contact);
}

findAllContacts = () =>{
    console.log(ContactsDB.length);
    return ContactsDB;
}

findContacts = (userId) =>{
    console.log("DB", ContactsDB);
    const contacts = ContactsDB.filter(contact=> contact.userId === userId);
    return contacts;
}

module.exports = {addContact, findAllContacts, findContacts, ContactsDB}

// exports.findContact = (contact) =>{
//     return ContactsDB.push(contact);
// }