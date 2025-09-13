const express = require("express");
const { uploadHealthData, getHealthRecords } = require("../controllers/healthController");
const router = express.Router();

router.post("/upload", uploadHealthData);
router.get("/:userId", getHealthRecords);

module.exports = router;
