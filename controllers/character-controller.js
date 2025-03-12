const { Character } = require('../database/models');

const characterController = {
    getAll: async (req, res) => {
        try {
            const typeReceived = req.query.type;
            let characters;

            if (typeReceived === 'numeric') {
                characters = await Character.findAll({ where: { type: 'numeric' } });
            } else if (typeReceived === 'character') {
                characters = await Character.findAll({ where: { type: 'character' } });
            } else {
                characters = await Character.findAll();
            }

            res.json(characters);
        } catch (error) {
            res.status(500).json({ message: "Error fetching characters", error: error.message });
        }
    },

    options: (req, res) => {
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Allow", "GET, POST, PUT, DELETE, OPTIONS");
        res.status(204).send();
    },

    post: async (req, res) => {
        const { is_numeric, value, image_path, video_path, modelName, timestamps, createdAt, updatedAt, tableName } = req.body;
        try {
            const character = await Character.create({ is_numeric, value, image_path, video_path, modelName, timestamps, createdAt, updatedAt, tableName });

            res.status(201).json({
                message: "Character created successfully",
                character: {
                    ...character.toJSON(),
                    _links: {
                        self: { href: `${process.env.SERVER_URL}/api/v1/characters/${character.id}` },
                        collection: { href: `${process.env.SERVER_URL}/api/v1/characters` },
                    },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error creating character", error: error.message });
        }
    },

    get: async (req, res) => {
        const id = req.params.id;
        try {
            const character = await Character.findByPk(id);
            if (!character) {
                return res.status(404).json({ message: "Character not found" });
            }
            res.status(200).json({
                ...character.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/api/v1/characters/${character.id}` },
                    collection: { href: `${process.env.SERVER_URL}/api/v1/characters` },
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Error fetching character", error: error.message });
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        try {
            const character = await Character.findByPk(id);
            if (!character) {
                return res.status(404).json({ message: "Character not found" });
            }
            await character.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Error deleting character", error: error.message });
        }
    },

    put: async (req, res) => {
        const id = req.params.id;
        try {
            const character = await Character.findByPk(id);
            if (!character) {
                return res.status(404).json({ message: "Character not found" });
            }

            await character.update({
                is_numeric: req.body.is_numeric,
                value: req.body.value,
                image_path: req.body.image_path,
                video_path: req.body.video_path,
            });

            res.status(200).json({
                ...character.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/api/v1/characters/${character.id}` },
                    collection: { href: `${process.env.SERVER_URL}/api/v1/characters` },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error updating character", error: error.message });
        }
    }
};

module.exports = characterController;
