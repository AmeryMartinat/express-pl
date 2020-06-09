module.exports = (sequelize, DataTypes) => {
    var Matches = sequelize.define('Matches', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      id: DataTypes.STRING,
      timeout: {
          type: 'TIMESTAMP'
      },
      fee_amount: DataTypes.DECIMAL(8,2),
      fee_currency_code: DataTypes.STRING,
      price_amount: DataTypes.DECIMAL(8,2),
      price_currency_code: DataTypes.STRING,
      play_two_for_region: DataTypes.BOOLEAN
    });
    Matches.associate = function(models) {
      models.Matches.hasOne(models.Consoles)
      models.Matches.hasOne(models.Formats)
      models.Matches.belongsToMany(models.Rules, {through: 'match_rules'})
      models.Matches.belongsToMany(models.Users, {through: models.Players})
    };
  
    return Matches;
  };