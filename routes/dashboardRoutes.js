const express = require("express");
const { getStats, getUsers } = require("../controllers/dashboardController");
const router = express.Router();
router.get("/stats", getStats);
router.get("/users", getUsers);
module.exports = router;
