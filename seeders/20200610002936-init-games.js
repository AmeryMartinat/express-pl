'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', 
    [
      {
        id: 'fn',
        name: 'Fortnite',
        background: 'http://images.playerslounge.co/img/match/fortnite.png',
        scoreLabel: 'Score',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
        PlatformPkey: 1
      },
      {
        id: 'val',
        name: 'Valorant',
        scoreLabel: 'Score',
        background: 'http://images.playerslounge.co/img/match/valorant.png',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
        PlatformPkey: 3
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
}