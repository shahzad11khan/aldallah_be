const Step2 = require('../models/Step2.Model');
const Step1 = require('../models/Step1.Model');

const uploadUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const image = req.file;

        // Validate input
        if (!username || !email || !email.includes('@')) {
            return res.status(400).json({ success: false, message: 'Username and valid email are required' });
        }

        const fineUser = await Step1.findOne({ email: email });
        if (!fineUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Convert image to base64
        const imageBase64 = image.buffer.toString('base64');
        const mimeType = image.mimetype;
        const imageData = `data:${mimeType};base64,${imageBase64}`;

        // Save to DB
        const newUser = new Step2({
            language: fineUser.language,
            country: fineUser.country,
            phoneNumber: fineUser.phoneNumber,
            email: fineUser.email,
            otp: fineUser.otp,
            otpCreatedAt: fineUser.otpCreatedAt,
            username,
            image: imageData,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User uploaded successfully',
            data: newUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

// Correct export
module.exports = {
    uploadUser
};
