'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Level.belongsToMany(models.User, {through: 'level_user'});
      models.Level.belongsToMany(models.Character, {through: 'character_level'});
    }
  }
  Level.init({
    name: DataTypes.STRING,
    show_example: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Level',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'levels'
  });
  return Level;
};