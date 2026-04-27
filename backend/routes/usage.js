// Usage routes - Example structure
const express = require('express');
const router = express.Router();
const usageController = require('../controllers/usageController');
const verifyToken = require('../middleware/auth');

router.get('/', verifyToken, usageController.getUsage);
router.post('/', verifyToken, usageController.recordUsage);
router.get('/analytics', verifyToken, usageController.getAnalytics);

module.exports = router;
