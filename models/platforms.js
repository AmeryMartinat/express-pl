module.exports = (sequelize, DataTypes) => {
    var Platforms = sequelize.define('Platforms', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      name: DataTypes.STRING,      
    });
  
    Platforms.associate = function(models) {
      // models.Platforms.belongsToMany(models.Gamertags)
    };
  
    return Platforms;
  };