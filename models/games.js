module.exports = (sequelize, DataTypes) => {
    var Games = sequelize.define('Games', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      id: DataTypes.STRING,
      name: DataTypes.STRING,
      background: DataTypes.STRING,

    });
  
    Games.associate = function(models) {
      models.Games.belongsToMany(models.Formats, {through: 'game_formats'});
      models.Games.belongsToMany(models.Rules, {through: 'game_rules'});
    };
  
    return Games;
  };