'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DisputeReasons', 
    [
      {
        type: 'match_expiration',
        reason: 'This match has been disputed because the match expired. You’ll be asked to provide proof of the match result during the dispute process.',
        created_at: '2020-06-09 19:42:40.557000 +00:00',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        type: 'player_cheated',
        reason: 'This match has been disputed because a player was determined to be cheating.',
        created_at: '2020-06-09 19:42:40.557000 +00:00',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DisputeReasons', null, {});
  }
}