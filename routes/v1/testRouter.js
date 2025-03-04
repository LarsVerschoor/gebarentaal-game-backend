const {Session} = require('../../database/models'); // Import the Sequelize model
const express = require('express')
const testRouter = new express.Router

testRouter.use(express.json());

testRouter.use(express.urlencoded({extended: true}));

testRouter.options('/', (req, res) => {
    res.header('Allow', 'GET,OPTIONS,POST');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.status(204).send();
});

testRouter.options('/:id', (req, res) => {
    res.header('Allow', 'GET,PUT,DELETE,OPTIONS, PATCH');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,OPTIONS, PATCH');
    res.status(204).send();
});

testRouter.get('/get_data',  async (req, res) => {
    // haalt data op uit de database
    const sessions = await Session.findAll();
    return res.status(200).json(sessions);
    });

testRouter.post('/add_data', async (req, res) => {
    // slaat data op in de database
    try {
        const { userId, token, expiresAt, name } = req.body;

        if (!Session) {
            throw new Error('Session model is not defined.');
        }

        // Insert into the database
        const newSession = await Session.create({ userId, token, expiresAt, name });

        // Respond with the inserted data
        return res.status(201).json({ message: 'Session created', data: newSession });
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Database error' });
    }
});

module.exports = testRouter;