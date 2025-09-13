const express = require("express");
const { createGroup, getGroupInfo } = require("../controllers/groupController");
const router = express.Router();

router.post("/", createGroup);
router.get("/:id", getGroupInfo);

module.exports = router;
