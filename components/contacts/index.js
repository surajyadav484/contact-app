const express = require("express");
const router = express.Router();
const contactController = require("../contacts/controller/contacts");

router.post("/:userId", contactController.createContact );
// router.put("/:userId/:contactId", contactController.updateContact );

module.exports = router;