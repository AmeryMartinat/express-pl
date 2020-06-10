module.exports = (sequelize, DataTypes) => {
    var DisputeReasons = sequelize.define('DisputeReasons', {
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
    DisputeReasons.associate = function(models) {
      models.DisputeReasons.hasMany(models.Disputes)
    };
  
    return DisputeReasons;
  };