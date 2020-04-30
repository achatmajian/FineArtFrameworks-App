module.exports = function(sequelize, DataTypes) {
    var Float = sequelize.define("float", {
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
  
    Float.associate = function(models) {
  
      // associations to go here :)
      Float.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'float_id' });
      
  
    };
  
    return Float;
  };