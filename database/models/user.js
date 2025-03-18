'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.Character, {through: 'character_user', foreignKey: 'user_id'});
      models.User.belongsToMany(models.Level, {through: 'level_user', foreignKey: 'user_id'});
    }
  }
  User.init({
    role: DataTypes.SMALLINT,
    name: DataTypes.STRING,
    student_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users'
  });
  return User;
};