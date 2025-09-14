import fetch from "node-fetch"; // npm i node-fetch

// Temporary in-memory OTP store for demo
const otpStore = {};

// JWT stubs (existing)
export const login = (req, res) => {
  res.send("Auth login route working (stub)");
};

export const verifyToken = (req, res) => {
  res.send("JWT verification route working (stub)");
};

// OTP handling using Fast2SMS
export const generateOTP = async (req, res) => {
  try {
    const { mobile } = req.body;

    if (!mobile || !/^\d{10}$/.test(mobile)) {
      return res.status(400).json({ success: false, message: "Invalid mobile number" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in memory for 5 minutes
    otpStore[mobile] = { otp, expires: Date.now() + 5 * 60 * 1000 };

    const message = `Your OTP is ${otp}`;

    // Send via Fast2SMS GET API
    const response = await fetch(
      `https://www.fast2sms.com/dev/bulkV2?authorization=${process.env.FAST2SMS_API_KEY}&message=${encodeURIComponent(message)}&language=english&route=q&numbers=${mobile}`,
      { method: "GET" }
    );

    const data = await response.json();

    if (data.return) {
      res.status(200).json({ success: true, message: "OTP sent successfully" });
    } else {
      res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Optional: verify OTP route
export const verifyOTP = (req, res) => {
  const { mobile, otp } = req.body;
  const record = otpStore[mobile];

  if (!record) return res.status(400).json({ success: false, message: "No OTP found" });
  if (record.expires < Date.now()) {
    delete otpStore[mobile];
    return res.status(400).json({ success: false, message: "OTP expired" });
  }
  if (record.otp !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });

  delete otpStore[mobile]; // OTP verified
  res.status(200).json({ success: true, message: "OTP verified successfully" });
};
