module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      uniqueKey: true,
      required: true
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {

    //paranoid: true, 
    //freezeTableName:true,
    underscored: true
  });



  User.associate = function (models) {

    // associations to go here :)

    /*
    User.hasMany(models.Client, { foreignKey: client_id });
    */

  };

  return User;
};