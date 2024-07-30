const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/schedule', authMiddleware, postController.schedulePost);
router.get('/analytics', authMiddleware, postController.getAnalytics);

module.exports = router;
