const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const aiService = require('./services/aiService');

const app = express();

mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

aiService.startMonitoring();

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;
