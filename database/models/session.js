'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Session.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Session.init({
    userId: DataTypes.BIGINT,
    token: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};