module.exports = function(sequelize, DataTypes) {
    var Drymount = sequelize.define("drymount", {
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
      underscored: true,
      timestamps: true
    });
  
  
    
    Drymount.associate = function(models) {
      /*
      // associations to go here :)
      Drymount.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'drymount_id' });
      */
  
    };
    
  
    return Drymount;
  };