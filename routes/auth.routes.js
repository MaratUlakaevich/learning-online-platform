const express = require("express");
const {validation} = require("../middleware/auth.middleware");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/register", validation, authController.register);
router.post("/login", validation, authController.login);
router.post("/logout", authController.logout);

module.exports = router;