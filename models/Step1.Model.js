
const mongoose = require('mongoose');

const Step1Schema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
     otpCreatedAt: { type: Date, default: Date.now }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model('Step1', Step1Schema);

