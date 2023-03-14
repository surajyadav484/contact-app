const { ContactsDB } = require("../../contacts/view/contacts");

const ContactInfo = [];

exports.addContactInfo = (info) =>{
    const {number, type, userId, contactId, contactInfoId} = info;

    console.log({ContactsDB});
     console.log(typeof contactId);

    const contacts = ContactsDB?.find(contact => (contact.userId === userId && contact.contactId === contactId));
    contacts?.contactInfo?.push({contactInfoId, number, type});
    console.log({contacts});
}



// exports.findContactInfo = (userId, contactId) =>{
//     ContactInfo.push(info);
// }