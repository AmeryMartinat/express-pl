module.exports = (sequelize, DataTypes) => {
    var Formats = sequelize.define('Formats', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      title: DataTypes.STRING,
      icon: DataTypes.STRING,
      
    });
  
    Formats.associate = function(models) {
      models.Formats.belongsToMany(models.Games, {through: 'game_formats'});
      models.Formats.hasMany(models.Matches);
    };
  
    return Formats;
  };