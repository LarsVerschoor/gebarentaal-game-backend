const { User } = require('../database/models');

const userController = {
    options: (req, res) => {
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Allow", "GET, POST, PUT, DELETE, OPTIONS");
        res.status(204).send();
    },

    getAll: async (req, res) => {
        try {
            const typeReceived = req.query.type;
            let users;

            if (typeReceived === 'numeric') {
                users = await User.findAll({ where: { type: 'numeric' } });
            } else if (typeReceived === 'user') {
                users = await User.findAll({ where: { type: 'user' } });
            } else {
                users = await User.findAll();
            }

            res.json(users);
        } catch (error) {
            res.status(500).json({ message: "Error fetching users", error: error.message });
        }
    },

    post: async (req, res) => {
        const { role, name, student_number, modelName, timestamps, createdAt, updatedAt, tableName } = req.body;
        try {
            const user = await User.create({ role, name, student_number, modelName, timestamps, createdAt, updatedAt, tableName });

            res.status(201).json({
                message: "User created successfully",
                user: {
                    ...user.toJSON(),
                    _links: {
                        self: { href: `${process.env.SERVER_URL}/api/v1/users/${user.id}` },
                        collection: { href: `${process.env.SERVER_URL}/api/v1/users` },
                    },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error creating user", error: error.message });
        }
    },

    get: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({
                ...user.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/api/v1/users/${user.id}` },
                    collection: { href: `${process.env.SERVER_URL}/api/v1/users` },
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Error fetching user", error: error.message });
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            await user.destroy();
            res.status(204).send(); // Geen content bij succesvolle DELETE
        } catch (error) {
            res.status(500).json({ message: "Error deleting user", error: error.message });
        }
    },

    put: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            await user.update({
                role: req.body.role,
                name: req.body.name,
                student_number: req.body.student_number,
            });

            res.status(200).json({
                ...user.toJSON(),
                _links: {
                    self: { href: `${process.env.SERVER_URL}/api/v1/users/${user.id}` },
                    collection: { href: `${process.env.SERVER_URL}/api/v1/users` },
                },
            });
        } catch (error) {
            res.status(400).json({ message: "Error updating user", error: error.message });
        }
    }
};

module.exports = userController;
