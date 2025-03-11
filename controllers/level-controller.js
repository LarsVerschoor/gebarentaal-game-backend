const {Level, Character} = require('../database/models');

const levelController = {
    getAll: (req, res) => {
        res.json(Level.findAll());
    },

    get: async (req, res) => {
        const id = req.params.id;
        try {
            const level = await Level.findByPk(id);
            if (!level) {
                return res.status(404).json({ message: "character not found" });
            }
            res.status(200).json({
                ...level.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/level/${id}` },
                    collection: { href: `${process.env.SERVER_URL}/level` },
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Error fetching character", error: error.message });
        }
    }
}

module.exports = levelController;