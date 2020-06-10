'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rules', 
    [
      {
        title: 'No interference',
        body: "You're not allowed to intentionally interfere with your opponent's attempts to move around the map or score kills. You can't build in front of them or break their structures, unless Sabotage is explicitly allowed. You can break your own structures.",
        icon: 'https://images.playerslounge.co/img/rules/restricted-icon.png',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      },
      {
        title: 'Kills while downed',
        body: "Kills while downed count towards your final score. Kills after your death, however you get them, do not. Sorry, no trap kills from beyond the grave.",
        icon: 'https://images.playerslounge.co/img/rules/restricted-icon.png',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00'
      }
    ]
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rules', null, {});
  }
}