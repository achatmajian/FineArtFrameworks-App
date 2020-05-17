module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("order", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      client_id: {
        type: DataTypes.INTEGER
      },
      storage_location: {
          type: DataTypes.STRING,
      },
      rush_status: {
        type: DataTypes.ENUM,
        values: ['none', '1 week', '2 weeks']
      },
      order_notes: {
          type: DataTypes.TEXT
      },
      order_extra_costs: {
          type: DataTypes.INTEGER,
          default: 0,
      },
      order_subtotal: {
          type: DataTypes.INTEGER
      },
      order_tax_percent: {
          type: DataTypes.INTEGER
      },
      order_total: {
          type: DataTypes.INTEGER
      },
      date_due: {
          type: DataTypes.DATE,
          allowNull: false
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
  
      //paranoid: true, 
      //freezeTableName:true,
      underscored: true,
      timestamps: true
    });
  
  
  
    Order.associate = function(models) {
  
      // associations to go here :)
      
      Order.belongsTo(models.client);

      Order.hasMany(models.frame, {foreignKey: 'order_id', as: 'order'});
      
  
    };
  
    return Order;
  };