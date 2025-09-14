import express from "express";
import { getAdminStats, getNGOMonitoring } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/admin-stats", getAdminStats);
router.get("/ngo-monitoring", getNGOMonitoring);

export default router;
