'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Word.belongsToMany(models.Lesson, {through: models.Lesson_word, foreignKey: 'word_id', otherKey: 'lesson_id'});
      models.Word.belongsToMany(models.Gesture, {through: models.Gesture_word, foreignKey: 'word_id', otherKey: 'gesture_id'});
    }
  }
  Word.init({
    name: DataTypes.STRING,
    video_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Word',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Word;
};