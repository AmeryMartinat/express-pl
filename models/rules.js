module.exports = (sequelize, DataTypes) => {
    var Rules = sequelize.define('Rules', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      title: DataTypes.STRING,     
      body: DataTypes.TEXT,    
      icon: DataTypes.STRING,     
    });
  
    Rules.associate = function(models) {
      models.Rules.hasMany(models.Matches)
      models.Rules.hasMany(models.Games)
    };
  
    return Rules;
  };