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
      prize_amount: DataTypes.DECIMAL(8,2),
      prize_currency_code: DataTypes.STRING,
      play_two_for_region: DataTypes.BOOLEAN
    });
    Matches.associate = function(models) {
      models.Matches.belongsTo(models.Consoles)
      models.Matches.belongsTo(models.Formats)
      models.Matches.belongsTo(models.Games)
      models.Matches.belongsTo(models.GlobalStates)
      models.Matches.belongsToMany(models.Rules, {through: 'match_rules'})
      models.Matches.belongsToMany(models.Users, {through: models.Players})
    };
  
    return Matches;
  };