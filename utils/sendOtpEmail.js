const nodemailer = require('nodemailer');

// Send OTP Email Utility
const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_HOST || 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'OTP Verification',
    text: `Please verify your OTP code And continue to the next step of the registration process. Your OTP code is: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOtpEmail;
