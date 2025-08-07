const Step1Model = require('../models/Step1.Model.js');
const sendOtpEmail = require('../utils/sendOtpEmail.js');


// Generate 6-digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

// CREATE entry
const createStep1 = async (req, res) => {
  try {
    const { language, country, phoneNumber, email } = req.body;
    if (!language || !country || !phoneNumber) {
      return res.status(400).json({ success: false, message: 'Provided data is incomplete' });
    }
   if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Valid email is required' });
    }
    
    const sendOTP = generateOTP();

    await sendOtpEmail(email, sendOTP); // ✅ Call utility function

    const newEntry = new Step1Model({
      language,
      country,
      phoneNumber,
      email,
      otp : sendOTP,
    });

    await newEntry.save();
    res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all entries
 const getAllStep1 = async (req, res) => {
  try {
    const entries = await Step1Model.find();
    res.status(200).json({ success: true, data: entries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET single entry by ID
 const getStep1ById = async (req, res) => {
  try {
    const entry = await Step1Model.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json({ success: true, data: entry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE entry
 const deleteStep1 = async (req, res) => {
  try {
    const deleted = await Step1Model.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json({ success: true, message: 'Entry deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStep1,
  getAllStep1,
  getStep1ById,
  deleteStep1,
};  