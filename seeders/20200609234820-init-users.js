'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
      {
        id: '1606057576026298',
        username: 'duncanlpltest',
        avatar: 'https://images.playerslounge.co/img/outline.png',
        RatingPkey: 4,
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
      },
      {
        id: '5576547526062661',
        username: 'duncanpl',
        avatar: 'https://images.playerslounge.co/development/duncanpl-1582890744',
        RatingPkey: 2,
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
}