const Post = require('../models/Post');
const moment = require('moment');

const analyzeUserData = async (userId) => {
    // Example analysis: find the times with the most engagement
    const posts = await Post.find({ userId });
    const engagementTimes = posts.reduce((acc, post) => {
        const hour = moment(post.scheduleTime).hour();
        if (!acc[hour]) acc[hour] = 0;
        acc[hour] += post.views; // assuming each post has a 'views' field
        return acc;
    }, {});

    const bestHour = Object.keys(engagementTimes).reduce((a, b) => engagementTimes[a] > engagementTimes[b] ? a : b);

    return bestHour;
};

const getAIRecommendations = async (userId) => {
    const bestHour = await analyzeUserData(userId);
    const recommendedTime = moment().set({ hour: bestHour, minute: 0 }).toISOString();

    return {
        recommendedTime,
        message: `Based on your post engagement, we recommend scheduling your next post at ${bestHour}:00.`
    };
};

module.exports = {
    getAIRecommendations
};
