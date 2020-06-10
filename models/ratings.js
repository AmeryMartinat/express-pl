module.exports = (sequelize, DataTypes) => {
    var Ratings = sequelize.define('Ratings', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      value: DataTypes.STRING,    
      color: DataTypes.STRING,  
    });
  
    Ratings.associate = function(models) {
      models.Ratings.hasMany(models.Users)
    };
  
    return Ratings;
  };