const express = require("express");
const { sendAlert, getAlerts } = require("../controllers/alertController");
const router = express.Router();
router.post("/", sendAlert);
router.get("/", getAlerts);
module.exports = router;
