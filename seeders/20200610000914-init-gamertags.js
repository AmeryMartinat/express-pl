'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Gamertags', 
    [
      {
        tag: 'Kunimo Snake',
        PlatformPkey: 1,
        UserPkey: 1,
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        tag: 'testedtest',
        PlatformPkey: 1,
        UserPkey: 2,
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gamertags', null, {});
  }
}
