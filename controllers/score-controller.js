const {Level, User, Character, LevelUser, CharacterUser} = require('../database/models');

const scoreController = {
    post: async (req, res) => {
        const time = req.body.time;
        const level = req.body?.level;
        if (!time || !level) {
            return res.status(400).json({error: 'Time and level is required'});
        }

        try {
            await updateOrInsertTime(req.user.id, level, time);
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
                    through: { attributes: ['best_time'] }
                }
            });
            res.status(200).json(JSON.stringify(levels));

        } catch(error) {
            console.error(error);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

const updateOrInsertTime = (user_id, level_id, time) => {
    return new Promise(async (resolve, reject) => {
       try {
           const levelUser = await LevelUser.findOne({
               where: { user_id, level_id }
           });
           if (!levelUser) {
               await LevelUser.create({ user_id, level_id, time: time });
               return resolve();
           }
           await levelUser.update({ best_time: levelUser.best_time < time ? levelUser.best_time : time });
           return resolve();
       } catch(error) {
           reject(error);
       }
    });
}

module.exports = scoreController;