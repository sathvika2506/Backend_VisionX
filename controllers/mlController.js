// backend/controllers/mlController.js
const mlService = require("../services/mlService");

exports.predict = async (req, res) => {
  try {
    const { features } = req.body;
    if (!features || !Array.isArray(features)) {
      return res.status(400).json({ success: false, message: "features array required" });
    }

    const result = await mlService.getPrediction(features);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
