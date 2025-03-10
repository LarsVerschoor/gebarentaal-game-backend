const {Character} = require('../database/models');

const characterController = {
    getAll: (req, res) => {
        res.json(Character.findAll());
    },



    get: async (req, res) => {
        const id = req.params.id;
        try {
            const character = await Character.findByPk(id);
            if (!character) {
                return res.status(404).json({ message: "character not found" });
            }
            res.status(200).json({
                ...character.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/character/${id}` },
                    collection: { href: `${process.env.SERVER_URL}/character` },
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Error fetching character", error: error.message });
        }
    },

    post: async (req, res) =>    {
        const { is_numeric, value, image_path, video_path, modelName, timestamps, createdAt, updatedAt, tableName} = req.body;
        try {
            const character = new Character({ is_numeric, value, image_path, video_path, modelName, timestamps, createdAt, updatedAt, tableName });
            await character.save();
            res.status(201).json({
                message: "character created successfully",
                movie: {
                    ...character.toJSON(),
                    _links: {
                        self: { href: `${process.env.SERVER_URL}/api/v1/characters/${character._id}` },
                        collection: { href: `${process.env.SERVER_URL}/api/v1/characters` },
                    },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error creating character", error: error.message });
        }
    },















}

module.exports = characterController;