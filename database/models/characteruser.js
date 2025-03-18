'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CharacterUser extends Model {
        static associate(models) {
            models.CharacterUser.belongsTo(models.Character, { foreignKey: 'character_id' });
            models.CharacterUser.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }

    CharacterUser.init({
        character_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: { model: 'characters', key: 'id' }
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: { model: 'users', key: 'id' }
        },
        times_correct: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        times_incorrect: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize,
        modelName: 'CharacterUser',
        tableName: 'character_user',
        timestamps: false
    });

    return CharacterUser;
};
