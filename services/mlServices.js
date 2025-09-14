const axios = require("axios");
const ML_URL = process.env.ML_URL || "http://localhost:5001/predict";
async function getPrediction(features) {
  try {
    const res = await axios.post(ML_URL, { features });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || err.message);
  }
}
module.exports = { getPrediction };
