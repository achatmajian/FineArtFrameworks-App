module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.UUID
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: DataTypes.DATE, 
    deleted_at: DataTypes.DATE},{

    //paranoid: true, 
    //freezeTableName:true,
    underscored: true
  });



  User.associate = function(models) {

    // associations to go here :)

    /*
    User.hasMany(models.Client, { foreignKey: client_id });
    */
  
  };

  return User;
};