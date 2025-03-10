const requireAcceptHeader = (req, res, next) => {
    const acceptHeader = req.headers['accept'];
    if (acceptHeader && acceptHeader.includes('application/json') || req.method === 'OPTIONS') {
        next();
    } else {
        res.status(406).json('Illegal accept header')
    }
}

module.exports = requireAcceptHeader;