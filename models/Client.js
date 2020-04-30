module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define('client', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      order_id: {
        type: DataTypes.UUID,
      },
      email: DataTypes.STRING,
      secondary_email: DataTypes.STRING,
      phone: DataTypes.STRING,
      secondary_phone: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      address_one: DataTypes.STRING,
      address_two: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
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
  
  
    
    Client.associate = function(models) {
  
      // associations to go here :)
      /*
      Client.belongsTo(models.User, { as: 'User', foreignKey: 'client_id' });
      
      Client.hasMany(models.Order, { foreignKey: 'order_id' });
      */
    };
    
  
    return Client;
  };