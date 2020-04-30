module.exports = function(sequelize, DataTypes) {
    var Spacer = sequelize.define("spacer", {
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
  
  
  
    Spacer.associate = function(models) {
  
      // associations to go here :)
      Spacer.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'spacer_id' });
      
  
    };
  
    return Spacer;
  };