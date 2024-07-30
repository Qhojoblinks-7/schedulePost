const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    mediaUrl: { type: String },
    scheduleTime: { type: Date, required: true },
    platform: { type: String, required: true },
    status: { type: String, default: 'scheduled' }
});

module.exports = mongoose.model('Post', postSchema);
