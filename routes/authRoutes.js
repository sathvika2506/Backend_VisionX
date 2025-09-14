import express from "express";
import { generateOTP, verifyOTP, login, verifyToken } from "../controllers/authController.js";

const router = express.Router();

// Send OTP
router.post("/otp", generateOTP);

// Verify OTP
router.post("/verify", verifyOTP);

// Login stub
router.post("/login", login);

// JWT verification stub
router.get("/verify-token", verifyToken);

export default router;
