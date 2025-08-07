const Step1Model = require('../models/Step1.Model.js');

 const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP are required' });
    }

    const user = await Step1Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.otp !== otp) {
      return res.status(401).json({ success: false, message: 'Invalid OTP' });
    }
    
    const otpAge = (Date.now() - user.otpCreatedAt) / 1000; // in seconds
    if (otpAge > 600) {
      return res.status(410).json({ success: false, message: 'OTP expired' });
    }

    // Success
    res.status(200).json({ success: true, message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = verifyOtp;