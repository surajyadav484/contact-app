const userController = require("./controller/users");
const express = require("express");
const router = express.Router();

router.get("/:userId",userController.getUser);
router.post("/",userController.createUser);

module.exports = router;