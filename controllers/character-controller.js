const {Character} = require('../database/models');

const characterController = {
    getAll: (req, res) => {
        res.json(Character.findAll());
    }
}

module.exports = characterController;