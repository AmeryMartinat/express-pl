module.exports = (sequelize, DataTypes) => {
    var Disputes = sequelize.define('Disputes', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      created_at: {
        type: 'TIMESTAMP'
      },

    });
    Disputes.associate = function(models) {
      models.Disputes.belongsToMany(models.Users, {through: models.DisputeScores})
      models.Disputes.belongsTo(models.DisputeReasons)
      models.Disputes.belongsTo(models.Matches)
    };
  
    return Disputes;
  };