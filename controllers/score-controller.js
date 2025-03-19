const {Level, User, LevelUser} = require('../database/models');

const scoreController = {
    post: async (req, res) => {
        const time = req.body.time;
        const level = req.body?.level;
        if (!time || !level) {
            return res.status(400).json({error: 'Time and level is required'});
        }

        try {
            await insertTime(req.user.id, level, time);
            res.status(201).json({success: 'success'});
        } catch(error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },
    get: async (req, res) => {
        try {
            const levels = await Level.findAll({
                include: {
                    model: User,
                    where: { id: req.user.id },
                    through: { attributes: ['best_time', 'created_at', 'updated_at'] }
                }
            });
            res.status(200).json(JSON.stringify(levels));

        } catch(error) {
            console.error(error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

const insertTime = (user_id, level_id, time) => {
    return new Promise(async (resolve, reject) => {
       try {
           await LevelUser.create({ user_id, level_id, best_time: time });
           return resolve();
       } catch(error) {
           reject(error);
       }
    });
}

module.exports = scoreController;
