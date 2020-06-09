module.exports = (sequelize, DataTypes) => {
    var Consoles = sequelize.define('Consoles', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      id: DataTypes.STRING,
      description: DataTypes.STRING
    });
    Consoles.associate = function(models) {
      models.Consoles.hasOne(models.Matches)
    };
  
    return Consoles;
  };