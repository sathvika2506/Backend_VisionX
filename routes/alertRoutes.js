import express from "express";
import { sendSMSAlert, sendIVRAlert } from "../controllers/alertController.js";

const router = express.Router();

router.post("/sms", sendSMSAlert);
router.post("/ivr", sendIVRAlert);

export default router;
