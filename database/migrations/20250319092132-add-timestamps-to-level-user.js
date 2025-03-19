'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('level_user', 'created_at', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('level_user', 'updated_at', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('level_user', 'created_at');
    await queryInterface.removeColumn('level_user', 'updated_at');
  }
};
