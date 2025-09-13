const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/:id", getUserProfile);
router.put("/:id", updateUserProfile);

module.exports = router;
