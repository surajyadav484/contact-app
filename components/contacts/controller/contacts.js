const {createContact:createContactService,getAllContacts, 
    getContacts:getContactsService, 
    updateContact:updateContactService} = require("../services/contacts")
const Contacts = require("../../../model/contacts");

exports.createContact = (req,res) =>{
    
    try {
        const {userId} = req.params;
        const {contactName} = req.body;
        if(!userId || !contactName){
            throw new Error("One or more fields are missing...")
        }
        const contact = new Contacts(contactName, userId);
        contact.setContactId(getAllContacts()+1);
        res.json(createContactService(contact));
    } catch (error) {
        res.json(error.message)
    }
}

// exports.updateContact = (req,res) =>{
//     const {}
//     updateContactService
// }

// exports.getContacts = (req, res) =>{
//     const 
// }


