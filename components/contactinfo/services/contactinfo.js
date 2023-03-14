const { addContactInfo } = require("../view/contactinfo");

exports.createContactInfo = (contactinfo) =>{
    const {number, type, userId, contactId, contactInfoId} = contactinfo;
    addContactInfo({number, type, userId, contactId, contactInfoId});
}