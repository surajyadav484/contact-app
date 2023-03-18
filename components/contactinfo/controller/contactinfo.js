const { BadRequest } = require("../../../errors/CustomError");
const {
  createContactInfo: createContactInfoService,
  getContactInfo: getContactInfoService,
} = require("../services/contactinfo");

const ContactInfo = require("../view/contactinfo");

exports.createContactInfo = async (req, res, next) => {
  try {
    const { userId, contactId } = req.params;
    const { number, type } = req.body;
    if (!(userId && contactId && number && type)) {
      throw new Error("One or more fields are missing!");
    }
    const contactInfo = new ContactInfo(number, type, userId, contactId);
    const returnContactInfo = await createContactInfoService(contactInfo);
    res.json(returnContactInfo);
  } catch (error) {
    next(error);
  }
};

exports.getContactInfo = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    if (!contactId) throw new BadRequest("Contact id not found!");
    const contactInfoList = await getContactInfoService(contactId);
    res.status(200).json(contactInfoList);
  } catch (error) {
    next(error);
  }
};
