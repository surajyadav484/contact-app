const userRoutes = require("../components/users/");
const contactRoutes = require("../components/contacts/")
const contactInfoRoutes = require("../components/contactinfo/")
const express = require("express");
const router = express.Router();

router.use("/user", userRoutes);
router.use("/contact", contactRoutes);
router.use("/contactinfo", contactInfoRoutes);

module.exports = router
