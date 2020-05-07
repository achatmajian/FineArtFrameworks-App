module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define('client', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        uniqueKey: true,
        allowNull: false
      },
      secondary_email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      secondary_phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address_one: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_two: {
        type: DataTypes.STRING,
        allowNull: true
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },{
  
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