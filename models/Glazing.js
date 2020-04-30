module.exports = function(sequelize, DataTypes) {
    var Glazing = sequelize.define("glazing", {
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
      }
    },{
        underscored: true
    });
  
  
    
    Glazing.associate = function(models) {
  
      // associations to go here :)
      /*
      Glazing.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'glazing_id' });
      */
  
    };

  
    return Glazing;
  };
