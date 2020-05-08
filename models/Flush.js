module.exports = function(sequelize, DataTypes) {
    var Flush = sequelize.define("flush", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
          type: DataTypes.STRING
      },
      cost_type: {
          type: DataTypes.STRING

      },
      cost: {
          type: DataTypes.INTEGER
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
  
  
    
    Flush.associate = function(models) {
  
      // associations to go here :)
      /*
      Flush.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'float_id' });
      */
  
    };
  
  
    return Flush;
  };