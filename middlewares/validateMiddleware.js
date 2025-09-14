// Middleware to validate mobile number in request body
export const validateMobile = (req, res, next) => {
  const { mobile } = req.body;
  if (!mobile || !/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ success: false, message: "Invalid mobile number" });
  }
  next();
};
