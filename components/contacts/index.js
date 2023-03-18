const express = require("express");
const router = express.Router();
const contactController = require("../contacts/controller/contacts");

router.post("/:userId", contactController.createContact);
router.put("/:contactId/:userId", contactController.updateContact);
// router.put("/:userId/:contactId", contactController.updateContact );

module.exports = router;
