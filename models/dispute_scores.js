module.exports = (sequelize, DataTypes) => {
    var DisputeScores = sequelize.define('DisputeScores', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      score: DataTypes.BOOLEAN
    });
    DisputeScores.associate = function(models) {
      models.DisputeScores.belongsTo(models.Disputes)
      models.DisputeScores.belongsTo(models.Users)
    };
  
    return DisputeScores;
  };