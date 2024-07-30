module.exports = {
    port: 3000,
    databaseUrl: 'mongodb://localhost:27017/mediaScheduler',
    jwtSecret: 'your_jwt_secret',
    socialMediaApiKeys: {
        twitter: 'your_twitter_api_key',
        facebook: 'your_facebook_api_key',
        instagram: 'your_instagram_api_key',
        whatsapp: 'your_whatsapp_api_key'
    }
};
