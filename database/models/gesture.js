'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gesture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Gesture.belongsToMany(models.Word, {through: models.Gesture_word, foreignKey: 'gesture_id', otherKey: 'word_id'});
    }
  }
  Gesture.init({
    name: DataTypes.STRING,
    icon_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gesture',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Gesture;
};