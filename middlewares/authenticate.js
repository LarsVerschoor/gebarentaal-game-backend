const fs = require("fs");
const path = require("path");
const jwt = require('jsonwebtoken');

const { User } = require(path.join(__dirname, '../', 'database/models'));
const publicKey = fs.readFileSync(path.join(__dirname, '../', 'keys/public.key'), 'utf8');

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(400).json({ error: 'Authorization token is missing' });
    }

    try {
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (error, decoded) => {
                if (error) reject(new Error('JSON Web Token could not be verified'));
                resolve(decoded);
            });
        });

        const user = await User.findByPk(decoded.user_id);
        if (!user) return res.status(401).json({error: 'Could not find user'});
        req.user = user;
        next();
    }
    catch (error) {
        if (error.message === 'JSON Web Token could not be verified') {
            return res.status(401).json({error: 'JSON Web Token could not be verified'})
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({error: 'JSON Web Token expired'});
        }
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = authenticate;