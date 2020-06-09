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
      models.Games.hasMany(models.Formats);
      models.Games.hasMany(models.Rules);
    };
  
    return Games;
  };