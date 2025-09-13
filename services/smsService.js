function sendSMS(phone, message) {
  console.log(`SMS sent to ${phone}: ${message}`);
  return true;
}
module.exports = { sendSMS };
