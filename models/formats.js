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
      models.Formats.hasMany(models.Games);
      models.Formats.hasMany(models.Matches);
    };
  
    return Formats;
  };