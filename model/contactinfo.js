class ContactInfo{
    constructor(number, type, userId, contactId){
        this.number = number,
        this.type = type,
        this.userId = userId,
        this.contactId = contactId
    }

    setContactInfoId(contactInfoId){
        this.contactInfoId = contactInfoId
    }

}

module.exports = ContactInfo;