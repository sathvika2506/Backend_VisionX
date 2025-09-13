const express = require("express");
const { login, generateOTP } = require("../controllers/authController");
const router = express.Router();
router.post("/login", login);
router.post("/otp", generateOTP);
module.exports = router;
