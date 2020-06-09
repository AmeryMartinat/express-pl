module.exports = (sequelize, DataTypes) => {
    var Dispute_Scores = sequelize.define('Dispute_Scores', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      score: DataTypes.BOOLEAN
    });
    Dispute_Scores.associate = function(models) {
      models.Dispute_Scores.hasOne(models.Disputes)
      models.Dispute_Scores.hasOne(models.Users)
    };
  
    return Dispute_Scores;
  };