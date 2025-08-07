const express = require('express');
const multer = require('multer');
const { uploadUser } = require('../controllers/step2.Controller');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload-user', upload.single('image'), uploadUser);

module.exports = router;
