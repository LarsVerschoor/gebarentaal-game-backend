const { Level } = require('../database/models');

const levelController = {
    options: (req, res) => {
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Allow", "GET, POST, PUT, DELETE, OPTIONS");
        res.status(204).send();
    },

    getAll: async (req, res) => {
        try {
            const typeReceived = req.query.type;
            let levels;

            if (typeReceived === 'numeric') {
                levels = await Level.findAll({ where: { type: 'numeric' } });
            } else if (typeReceived === 'level') {
                levels = await Level.findAll({ where: { type: 'level' } });
            } else {
                levels = await Level.findAll();
            }
            const levelsWithLinks = levels.map(level => ({
                ...level.toJSON(),
                self: { href: `${process.env.SERVER_URL}/api/v1/levels/${level.id}` },
                collection: { href: `${process.env.SERVER_URL}/api/v1/levels` },
            }));

            res.json(levelsWithLinks);

        } catch (error) {
            res.status(500).json({ message: "Error fetching levels", error: error.message });
        }
    },

    post: async (req, res) => {
        const { name, show_example, modelName, timestamps, createdAt, updatedAt, tableName } = req.body;
        try {
            const level = await Level.create({ name, show_example, modelName, timestamps, createdAt, updatedAt, tableName });

            res.status(201).json({
                message: "Level created successfully",
                level: {
                    ...level.toJSON(),
                    _links: {
                        self: { href: `${process.env.SERVER_URL}/api/v1/levels/${level.id}` },
                        collection: { href: `${process.env.SERVER_URL}/api/v1/levels` },
                    },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error creating level", error: error.message });
        }
    },

    get: async (req, res) => {
        const id = req.params.id;
        try {
            const level = await Level.findByPk(id);
            if (!level) {
                return res.status(404).json({ message: "Level not found" });
            }
            res.status(200).json({
                ...level.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/api/v1/levels/${id}` },
                    collection: { href: `${process.env.SERVER_URL}/api/v1/levels` },
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Error fetching level", error: error.message });
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        try {
            const level = await Level.findByPk(id);
            if (!level) {
                return res.status(404).json({ message: "Level not found" });
            }
            await level.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Error deleting level", error: error.message });
        }
    },

    put: async (req, res) => {
        const id = req.params.id;
        try {
            // Zoek eerst het level
            const level = await Level.findByPk(id);
            if (!level) {
                return res.status(404).json({ message: "Level not found" });
            }

            // Update het level
            await level.update({
                name: req.body.name,
                show_example: req.body.show_example,
            });

            res.status(200).json({
                ...level.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/api/v1/levels/${id}` },
                    collection: { href: `${process.env.SERVER_URL}/api/v1/levels` },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error updating level", error: error.message });
        }
    }
};

module.exports = levelController;
