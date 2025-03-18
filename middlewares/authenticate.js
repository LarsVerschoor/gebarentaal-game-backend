const path = require("path");
const { User } = require(path.join(__dirname, '../', 'database/models'));

const authenticate = async (req, res, next) => {
    if (!req.userId) {
        console.warn('Ensure the check-logged-in middleware is called before the authenticate middleware!');
        return res.status(500).json({error: 'Internal Server Error'});
    }

    try {
        const user = await User.findByPk(req.userId);
        if (!user) {
            console.warn(`User with id ${req.userId} could not be found while authenticating`);
            return res.status(404).json({error: 'User not found.'});
        }

        req.user = user;
        next();
    }
    catch (error) {
        console.error('Authentication middleware error:', error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = authenticate;