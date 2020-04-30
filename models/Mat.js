module.exports = function(sequelize, DataTypes) {
    var Mat = sequelize.define("mat", {
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
  
  
  
    Mat.associate = function(models) {
  
      // associations to go here :)
      Mat.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'mat_id' });
      
  
    };
  
    return Mat;
  };