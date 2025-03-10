const {User} = require('../database/models');

const userController = {
    getAll: (req, res) => {
        res.json(User.findAll());
    }
}

module.exports = userController;