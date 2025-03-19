'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LevelUser extends Model {
        static associate(models) {
            models.LevelUser.belongsTo(models.User, { foreignKey: 'user_id' });
            models.LevelUser.belongsTo(models.Level, { foreignKey: 'level_id' });
        }
    }

    LevelUser.init({
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: { model: 'users', key: 'id' }
        },
        level_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: { model: 'levels', key: 'id' }
        },
        best_time: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'LevelUser',
        tableName: 'level_user',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return LevelUser;
};
