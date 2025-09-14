import express from "express";
import { uploadHealthData, getHealthRecords } from "../controllers/healthController.js";

const router = express.Router();

router.post("/upload", uploadHealthData);
router.get("/:userId", getHealthRecords);

export default router;
