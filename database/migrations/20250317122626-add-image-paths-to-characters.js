'use strict';

const { where } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of alphabet) {
      await queryInterface.bulkUpdate('characters', { image_path: letter }, { value: letter });
    }
  },

  async down (queryInterface, Sequelize) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of alphabet) {
      await queryInterface.bulkUpdate('characters', { image_path: letter }, { value: ''});
    }
    
  }
};
