const express = require('express');
const aiService = require('../services/aiService');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/recommendations', authMiddleware, async (req, res) => {
    try {
        const recommendations = await aiService.getAIRecommendations(req.user._id);
        res.status(200).json(recommendations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
