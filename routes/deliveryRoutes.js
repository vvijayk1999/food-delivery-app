const express = require('express');

const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

/**
 * @swagger
 * /api/calculate-delivery-cost:
 *   post:
 *     summary: Calculate delivery cost
 *     description: Calculates the delivery cost based on the provided parameters.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 example: central
 *               organization_id:
 *                 type: string
 *                 example: 005
 *               total_distance:
 *                 type: number
 *                 example: 12
 *               item_type:
 *                 type: string
 *                 example: perishable
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   example: 20.5
 */
router.post('/calculate-delivery-cost', deliveryController.calculateDeliveryCost);

module.exports = router;
