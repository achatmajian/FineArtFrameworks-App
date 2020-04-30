module.exports = function(sequelize, DataTypes) {
    var Material = sequelize.define("material", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      face_width: DataTypes.STRING,
      frame_depth: DataTypes.STRING,
      material: {
          type: DataTypes.STRING
      },
      finish: {
          type: DataTypes.STRING
      },
      detail: {
          type: DataTypes.STRING
      },
      cost_per_foot: {
          type: DataTypes.INTEGER
      }
    },{
        underscored: true
    }); 
  
    Material.associate = function(models) {
  
      // associations to go here :)
      Material.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'material_id' });
      
  
    };
  
    return Material;
  };