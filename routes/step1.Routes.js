const express = require('express');
const {
  createStep1,
  getAllStep1,
  getStep1ById,
  deleteStep1,
} = require('../controllers/step1.Controller.js');

const router = express.Router();

// Swagger documentation for Step1 routes
/**
 * @swagger
 * components:
 *   schemas:
 *     Step1:
 *       type: object
 *       required:
 *         - language
 *         - country
 *         - phoneNumber
 *         - email
 *       properties:
 *         language:
 *           type: string
 *           description: Language of the user
 *           example: "English"
 *         country:
 *           type: string
 *           description: Country of the user
 *           example: "USA"
 *         phoneNumber:
 *           type: string
 *           description: User's phone number
 *           example: "+1234567890"
 *         email:
 *           type: string
 *           description: User's email address
 *           example: "testuser@example.com"
 *         otp:
 *           type: string
 *           description: One-time password
 *           example: "123456"
 */


/**
 * @swagger
 * /api/step1:
 *   post:
 *     summary: Create a new Step1 entry
 *     tags:
 *       - Step1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *                 example: "English"
 *               country:
 *                 type: string
 *                 example: "USA"
 *               phoneNumber:
 *                 type: string
 *                 example: "+1234567890"
 *               email:
 *                 type: string
 *                 example: "testuser@example.com"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Step1 entry created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createStep1);

/**
 * @swagger
 * /api/step1:
 *   get:
 *     summary: Get all Step1 entries
 *     tags:
 *       - Step1
 *     responses:
 *       200:
 *         description: List of Step1 entries
 *       500:
 *         description: Server error
 */
router.get('/', getAllStep1);

/**
 * @swagger
 * /api/step1/{id}:
 *   get:
 *     summary: Get a Step1 entry by ID
 *     tags:
 *       - Step1
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The Step1 entry ID
 *     responses:
 *       200:
 *         description: Step1 entry data
 *       404:
 *         description: Entry not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getStep1ById);

/**
 * @swagger
 * /api/step1/{id}:
 *   delete:
 *     summary: Delete a Step1 entry by ID
 *     tags:
 *       - Step1
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The Step1 entry ID
 *     responses:
 *       200:
 *         description: Entry deleted
 *       404:
 *         description: Entry not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteStep1);

module.exports = router;
