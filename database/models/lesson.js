'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Lesson.belongsToMany(models.Word, {through: models.Lesson_word, foreignKey: 'lesson_id', otherKey: 'word_id'});
    }
  }
  Lesson.init({
    number: DataTypes.SMALLINT,
    video_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lesson',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Lesson;
};