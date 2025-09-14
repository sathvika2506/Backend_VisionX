import express from "express";
import { createGroup, getGroupInfo } from "../controllers/groupController.js";

const router = express.Router();

router.post("/", createGroup);
router.get("/:id", getGroupInfo);

export default router;
