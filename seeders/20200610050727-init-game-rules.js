'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('game_rules', 
    [
      {
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
        GamePkey: 1,
        RulePkey: 1
      },
      {
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
        GamePkey: 1,
        RulePkey: 2
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('game_rules', null, {});
  }
}