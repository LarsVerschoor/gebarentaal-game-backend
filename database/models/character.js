'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Character.belongsToMany(models.Level, {through: 'character_level'});
      models.Character.belongsToMany(Models.User, {through: 'character_user'});
    }
  }
  Character.init({
    is_numeric: DataTypes.TINYINT,
    value: DataTypes.STRING,
    image_path: DataTypes.STRING,
    video_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'characters'
  });
  return Character;
};