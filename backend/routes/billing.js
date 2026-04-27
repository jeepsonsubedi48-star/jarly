// Billing routes - Example structure
const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');
const verifyToken = require('../middleware/auth');

router.get('/', verifyToken, billingController.getBills);
router.get('/:id', verifyToken, billingController.getBillById);
router.post('/payment', verifyToken, billingController.recordPayment);

module.exports = router;
