'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lesson_word.init({
    word_id: DataTypes.BIGINT,
    lesson_id: DataTypes.BIGINT
  }, {
    sequelize,
    tableName: 'lesson_word',
    modelName: 'Lesson_word',
    timestamps: false
  });
  return Lesson_word;
};