module.exports = (sequelize, DataTypes) => {
    var Gamertags = sequelize.define('Gamertags', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      tag: DataTypes.STRING,      
    });
  
    Gamertags.associate = function(models) {
      models.Gamertags.hasOne(models.Platforms)
      models.Gamertags.belongsTo(models.Users)
    };
  
    return Gamertags;
  };