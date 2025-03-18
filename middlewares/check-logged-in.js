const fs = require("fs");
const path = require("path");
const jwt = require('jsonwebtoken');

const publicKey = fs.readFileSync(path.join(__dirname, '../', 'keys/public.key'), 'utf8');

const checkLoggedIn = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ error: 'Authorization token is missing' });
        }

        const tokenParts = authHeader.split(' ');
        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            return res.status(401).json({ error: 'Invalid authorization format' });
        }

        const jwtToken = tokenParts[1];

        const { user_id } = await new Promise((resolve, reject) => {
            jwt.verify(jwtToken, publicKey, { algorithms: ['RS256'] }, (error, decoded) => {
                if (error) return reject(new Error('JSON Web Token could not be verified'));
                resolve(decoded);
            });
        });

        req.userId = user_id;
        next();
    } catch (error) {
        console.error(error);

        if (error.message === 'JSON Web Token could not be verified') {
            return res.status(401).json({ error: error.message });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'JSON Web Token expired' });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = checkLoggedIn;
