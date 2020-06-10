'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Consoles', 
    [
      {
        id: 'controller',
        description: 'Xbox or PS4 with a Controller',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        id: 'mobile',
        description: 'Gaming on the Go!',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        id: 'mouse_and_keyboard',
        description: 'Aimgods',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Consoles', null, {});
  }
}