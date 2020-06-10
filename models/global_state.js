module.exports = (sequelize, DataTypes) => {
    var GlobalStates = sequelize.define('GlobalStates', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      id: DataTypes.STRING,
      value: DataTypes.STRING
    });
    GlobalStates.associate = function(models) {
      models.GlobalStates.hasMany(models.Matches)
    };
  
    return GlobalStates;
  };