'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('character_user', {
      level_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      times_correct: {
        allowNull: false,
        type: Sequelize.INTEGER,
        default: 0
      },
      times_incorrect: {
        allowNull: false,
        type: Sequelize.INTEGER,
        default: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('character_user');
  }
};