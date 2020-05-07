module.exports = function(sequelize, DataTypes) {
    var Island = sequelize.define("island", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
          type: DataTypes.STRING
      },
      color: {
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
  
  
    
    Island.associate = function(models) {
  
      // associations to go here :)

      /*
      Island.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'island_id' });
     */ 
  
    };
  
  
    return Island;
  };