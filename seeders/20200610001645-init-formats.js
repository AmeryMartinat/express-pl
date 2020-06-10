'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Formats', 
    [
      {
        title: '1v1 Duo',
        icon: 'https://images.playerslounge.co/img/formats/fortnite1v1.png',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        title: '2v2 Duo',
        icon: 'https://images.playerslounge.co/img/formats/fortnite2v2.png',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        title: '1v9 HardCarry',
        icon: 'https://images.playerslounge.co/img/formats/DustinValorant.jpg',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Formats', null, {});
  }
}