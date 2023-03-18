const userController = require("./controller/users");
const express = require("express");
const router = express.Router();
const JWT = require("../../middleware/jwt");

// router.get("/:userId", JWT.verifyToken, userController.getUser);
router.get("/:userId/:contactId", userController.getUserContacts);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.removeUser);
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);

module.exports = router;
