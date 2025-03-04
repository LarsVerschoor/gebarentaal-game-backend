'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gesture_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gesture_word.init({
    gesture_id: DataTypes.BIGINT,
    word_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Gesture_word',
    tableName: 'gesture_word',
    timestamps: false
  });
  return Gesture_word;
};