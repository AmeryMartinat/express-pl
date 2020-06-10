'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GlobalStates', 
    [
      {
        id: 'completed',
        value: 'MatchComplete',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        id: 'pending',
        value: 'MatchInProgress',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GlobalStates', null, {});
  }
}