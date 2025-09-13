function predictRisk(healthData) {
  console.log("ML risk prediction on:", healthData);
  return { risk: "low" };
}
module.exports = { predictRisk };
