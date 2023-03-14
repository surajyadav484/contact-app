class Contacts{
    constructor(contactName, userId, contactInfo){
        this.contactName = contactName,
        this.contactInfo = contactInfo
        this.userId = userId
    }

    setContactId(contactId){
        this.contactId = contactId;
    }

}

module.exports = Contacts;