'use strict';

const { where } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of alphabet) {
      await queryInterface.bulkUpdate('characters', { image_path: letter }, { value: letter });
    }

    // await queryInterface.bulkUpdate('characters', {image_path:'A'}, {value:'A'})
    // await queryInterface.bulkUpdate('characters', {image_path:'B'}, {value:'B'})
    // await queryInterface.bulkUpdate('characters', {image_path:'C'}, {value:'C'})
    // await queryInterface.bulkUpdate('characters', {image_path:'D'}, {value:'D'})
    // await queryInterface.bulkUpdate('characters', {image_path:'E'}, {value:'E'})
    // await queryInterface.bulkUpdate('characters', {image_path:'F'}, {value:'F'})
    // await queryInterface.bulkUpdate('characters', {image_path:'G'}, {value:'G'})
    // await queryInterface.bulkUpdate('characters', {image_path:'H'}, {value:'H'})
    // await queryInterface.bulkUpdate('characters', {image_path:'I'}, {value:'I'})
    // await queryInterface.bulkUpdate('characters', {image_path:'J'}, {value:'J'})
    // await queryInterface.bulkUpdate('characters', {image_path:'K'}, {value:'K'})
    // await queryInterface.bulkUpdate('characters', {image_path:'L'}, {value:'L'})
    // await queryInterface.bulkUpdate('characters', {image_path:'M'}, {value:'M'})
    // await queryInterface.bulkUpdate('characters', {image_path:'N'}, {value:'N'})
    // await queryInterface.bulkUpdate('characters', {image_path:'O'}, {value:'O'})
    // await queryInterface.bulkUpdate('characters', {image_path:'P'}, {value:'P'})
    // await queryInterface.bulkUpdate('characters', {image_path:'Q'}, {value:'Q'})
    // await queryInterface.bulkUpdate('characters', {image_path:'R'}, {value:'R'})
    // await queryInterface.bulkUpdate('characters', {image_path:'S'}, {value:'S'})
    // await queryInterface.bulkUpdate('characters', {image_path:'T'}, {value:'T'})
    // await queryInterface.bulkUpdate('characters', {image_path:'U'}, {value:'U'})
    // await queryInterface.bulkUpdate('characters', {image_path:'V'}, {value:'V'})
    // await queryInterface.bulkUpdate('characters', {image_path:'W'}, {value:'W'})
    // await queryInterface.bulkUpdate('characters', {image_path:'X'}, {value:'X'})
    // await queryInterface.bulkUpdate('characters', {image_path:'Y'}, {value:'Y'})
    // await queryInterface.bulkUpdate('characters', {image_path:'Z'}, {value:'Z'})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('characters', {image_path:'A'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'B'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'C'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'D'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'E'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'F'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'G'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'H'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'I'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'J'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'K'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'L'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'M'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'N'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'O'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'P'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'Q'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'R'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'S'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'T'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'U'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'V'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'W'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'X'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'Y'}, {value:''})
    await queryInterface.bulkUpdate('characters', {image_path:'Z'}, {value:''})
  }
};
