const { BadRequest, NotFoundError } = require("../../../errors/CustomError");
const {
  createContact: createContactService,
  getAllContacts,
  getContacts: getContactsService,
  updateContact: updateContactService,
} = require("../services/contacts");
const { Contacts } = require("../view/contacts");

exports.createContact = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { contactName } = req.body;
    if (!userId || !contactName) {
      throw new BadRequest("One or more fields are missing...");
    }
    console.log({ contactName, userId });
    const contact = new Contacts(contactName, userId);
    const returnedContact = await createContactService(contact);
    res.json(returnedContact);
  } catch (error) {
    next(error);
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const { contactName } = req.body;
    const { contactId, userId } = req.params;
    if (!contactId) throw new NotFoundError("contact id is not valid");
    const contacts = new Contacts(contactName);
    const updatedContacts = await updateContactService(
      contactId,
      userId,
      contacts
    );
    res.json(updatedContacts);
  } catch (error) {
    next(error);
  }
};

// exports.updateContact = (req,res) =>{
//     const {}
//     updateContactService
// }

// exports.getContacts = (req, res) =>{
//     const
// }
