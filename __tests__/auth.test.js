const request = require('supertest');
const app = require('../src/server');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Auth API', () => {
    it('should register a new user', async () => {
        const res = await request(app).post('/api/auth/register').send({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'testpassword'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('token');
    });

    it('should login a user', async () => {
        await request(app).post('/api/auth/register').send({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'testpassword'
        });

        const res = await request(app).post('/api/auth/login').send({
            email: 'testuser@example.com',
            password: 'testpassword'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });
});

beforeEach(async () => {
    await User.deleteMany({}); // Clears users before each test
});

afterEach(async () => {
    await User.deleteMany({}); // Clears users after each test
});
