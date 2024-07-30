const Post = require('../models/Post');
const scheduleService = require('../services/scheduleService');

exports.schedulePost = async (req, res) => {
    try {
        const post = new Post({
            user: req.user.id,
            content: req.body.content,
            mediaUrl: req.body.mediaUrl,
            scheduleTime: req.body.scheduleTime,
            platform: req.body.platform
        });

        await post.save();
        scheduleService.schedulePost(post);

        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAnalytics = async (req, res) => {
    try {
        const analytics = await scheduleService.getAnalytics(req.user.id);
        res.json(analytics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
