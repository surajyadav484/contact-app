const ContactInfo = require("../../../model/contactinfo");
const {createContactInfo: createContactInfoService} = require("../services/contactinfo");

exports.createContactInfo = (req,res) =>{
    try {
        const {userId, contactId} = req.params;
        const {number, type} = req.body;
       if(!(userId && contactId && number && type)){
        throw new Error("One or more fields are missing!")
       }
        const contactinfo = new ContactInfo(number, type, userId, contactId);
        contactinfo.setContactInfoId(1);
        createContactInfoService(contactinfo);

        
    } catch (error) {
        res.json(error.message)
    }
}