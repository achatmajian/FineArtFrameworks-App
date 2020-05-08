module.exports = function(sequelize, DataTypes) {
    var Strainer = sequelize.define("strainer", {
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
  
  
  
    Strainer.associate = function(models) {
  
      // associations to go here :)
      /*
      Strainer.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'strainer_id' });
      */
      
  
    };
  
    return Strainer;
  };