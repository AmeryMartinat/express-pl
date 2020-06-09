module.exports = (sequelize, DataTypes) => {
    var Disputes = sequelize.define('Disputes', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      type: DataTypes.STRING,
      reason: DataTypes.STRING,
      created_at: {
        type: 'TIMESTAMP'
      },

    });
    Disputes.associate = function(models) {
      models.Disputes.belongsToMany(models.Users, {through: models.DisputeScores})
    };
  
    return Disputes;
  };