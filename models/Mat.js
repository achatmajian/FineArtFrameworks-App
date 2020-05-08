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
      color: {
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
  
  
    
    Mat.associate = function(models) {
  
      // associations to go here :)

      /*
      Mat.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'mat_id' });
     */ 
  
    };
  
  
    return Mat;
  };