module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('Users', {
      pkey: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
      id: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.STRING,
      
    });
  
    Users.associate = function(models) {
      models.Users.hasMany(models.Gamertags);
      models.Users.hasOne(models.Rating)
      models.Users.belongsToMany(models.Matches, {through: models.Players})
      models.Users.belongsToMany(models.Disputes, {through: models.Dispute_Scores})
    };
  
    return Users;
  };