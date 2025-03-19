const { User } = require('../../database/models');

const accountController = {
    getAll: async (req, res) => {
        try {
            if (req.user.role !== 1) {
                return res.status(403).json({error: 'You must have permission to access this data'});
            }

            const allUsers = await User.findAll();
            return res.status(200).json(allUsers);
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: 'Internal Server Error'});
        }

    },
    post: async (req, res) => {
        try {
            if (req.user.role !== 1) {
                return res.status(403).json({error: 'You must have permission to insert this data'});
            }
            const email = req.body?.email;
            const role = req.body?.role;
            if (!email || !role) {
                return res.status(400).json({error: 'Email and role are required fields'});
            }
            if (typeof email !== 'string') {
                return res.status(400).json({error: 'Email must be of type \'string\''});
            }
            if (typeof role !== 'number') {
                return res.status(400).json({error: 'Role must be of type \'number\''});
            }
            const newUser = await User.create({
                email,
                role
            });
            return res.status(201).json(newUser);
        } catch(error) {
            console.error(error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    },
    delete: async (req, res) => {
        try {
            if (req.user.role !== 1) {
                return res.status(403).json({error: 'You must have permission to delete this data'});
            }
            const id = req.query?.id;
            if (!id) {
                return res.status(400).json({error: 'Id is a required field'});
            }
            const parsedId = parseInt(id);
            if (isNaN(parsedId)) {
                return res.status(400).json({error: 'Id must be of type \'number\''});
            }
            const deleted = await User.destroy({
                where: { id: parsedId }
            });
            if (!deleted) return res.status(404).json({ error: 'User could not be found' });
            return res.status(200).json({message: 'User successfully deleted'});
        } catch(error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    patch: async (req, res) => {
        try {
            const id = req.query?.id;
            const newRole = req.body?.role;
            if (!id || !newRole) {
                return res.status(400).json({error: 'Id and role are required fields'});
            }
            const parsedId = parseInt(id);
            if (isNaN(parsedId)) {
                return res.status(400).json({error: 'Id must be of type \'number\''});
            }
            if (typeof newRole !== 'number') {
                return res.status(400).json({error: 'Role must be of type \'number\''});
            }
            const [updatedCount] = await User.update({ role: newRole }, { where: { id: parsedId } });
            if (updatedCount === 0) {
                return res.status(404).json({ error: 'User not found or role unchanged' });
            }
            const updatedUser = await User.findByPk(parsedId, null);
            return res.status(200).json(updatedUser);
        } catch(error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = accountController;