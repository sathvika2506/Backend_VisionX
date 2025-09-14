
// ./routes/mlRoute.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/predict", async (req, res) => {
  try {
    const features = req.body.features;

    if (!features || !Array.isArray(features) || features.length !== 13) {
      return res.status(400).json({ error: "Provide an array of 13 feature values" });
    }

    const response = await axios.post("http://127.0.0.1:5001/predict", { features });
    return res.json(response.data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ ES Module export
export default router;
