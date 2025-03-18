'use strict';

const {query} = require("express");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('level_user', 'times_played');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('level_user', 'times_played', {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  }
};
