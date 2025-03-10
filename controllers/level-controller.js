const {Level} = require('../database/models');

const levelController = {
    getAll: (req, res) => {
        res.json(Level.findAll());
    }
}

module.exports = levelController;