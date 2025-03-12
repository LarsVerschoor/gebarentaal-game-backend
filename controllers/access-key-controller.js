const { AccessKey } = require('../database/models');
const path = require('path');
const crypto = require('crypto');
const correctPassword = process.env['REQUEST_KEY_PASSWORD'];
if (!correctPassword) console.warn('Please provide the REQUEST_KEY_PASSWORD in .env');

const accessKeyController = {
    registerPage: (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'frontend/access-keys/index.html'));
    },
    createKey: async (req, res) => {
        try {
            const password = req.body.password;
            if (!password) return res.status(401).json({error: 'Required fields: password'});
            if (password !== correctPassword) return res.status(401).json({error: 'Password is incorrect'});

            const newKey = await AccessKey.create({
                key: crypto.randomBytes(32).toString('hex')
            });
            console.log(newKey);
            res.status(200).json({key: newKey.key});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = accessKeyController;