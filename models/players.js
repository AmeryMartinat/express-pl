module.exports = (sequelize, DataTypes) => {
    var Players = sequelize.define('Players', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      creator: DataTypes.BOOLEAN,
      winner: DataTypes.BOOLEAN,
      ready: DataTypes.BOOLEAN,
      ready_at: {
          type: 'TIMESTAMP'
      },
      joined_at: {
          type: 'TIMESTAMP'
      }
    });
    Players.associate = function(models) {
      models.Players.hasOne(models.Users);
      models.Players.hasOne(models.Matches)
    };
  
    return Players;
  };