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
      models.Rules.belongsToMany(models.Matches, {through: 'match_rules'})
      models.Rules.belongsToMany(models.Games, {through: 'game_rules'})
    };
  
    return Rules;
  };