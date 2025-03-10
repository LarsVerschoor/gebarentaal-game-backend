'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('character_level', {
      character_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      level_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('character_level');
  }
};
