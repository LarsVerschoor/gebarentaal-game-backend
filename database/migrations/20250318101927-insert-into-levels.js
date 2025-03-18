'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('levels', [
      {
        name: 'Beginner',
        show_example: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Normaal',
        show_example: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Expert',
        show_example: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('levels', {name: ['Beginner', 'Normaal', 'Expert']});
  }
};
