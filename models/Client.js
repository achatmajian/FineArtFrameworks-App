module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define('client', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
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
      },
      client_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },{
      underscored: true,
      timestamps: true
    });
  
    Client.associate = function(models) {
      Client.belongsTo(models.user);
      Client.hasMany(models.order, {foreignKey: 'client_id'});
    };
    
    return Client;
  };