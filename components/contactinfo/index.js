const express = require("express");
const router = express.Router();
const contactController = require("../contactinfo/controller/contactinfo");

router.post("/:userId/:contactId", contactController.createContactInfo);

module.exports = router;