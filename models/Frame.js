module.exports = function(sequelize, DataTypes) {
    var Frame = sequelize.define("frame", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      paper_width: {
          type: DataTypes.INTEGER
      },
      paper_height: {
          type: DataTypes.INTEGER
      },
      image_width: {
          type: DataTypes.INTEGER
      },
      image_height: {
          type: DataTypes.INTEGER
      },
      mat_size: {
          type: DataTypes.INTEGER
      },
      window_width: {
          type: DataTypes.INTEGER
      },
      window_height: {
          type: DataTypes.INTEGER
      },
      face_width: {
          type: DataTypes.INTEGER
      },
      frame_depth: {
          type: DataTypes.INTEGER
      },
      frame_size: {
          type: DataTypes.INTEGER
      },
      united_inch: {
          type: DataTypes.INTEGER
      },
      drymount_id: {
          type: DataTypes.INTEGER
      },
      extras_id: {
          type: DataTypes.INTEGER
      },
      float_id: {
          type: DataTypes.INTEGER
      },
      flush_id: {
          type: DataTypes.INTEGER
      },
      glazing_id: {
          type: DataTypes.INTEGER
      },
      mat_id: {
          type: DataTypes.INTEGER
      },
      material_id: {
        type: DataTypes.INTEGER
    },
      spacer_id: {
          type: DataTypes.INTEGER
      },
      strainer_id: {
          type: DataTypes.INTEGER
      },
      frame_extra_cost: {
          type: DataTypes.INTEGER,
          default: 0
      },
      frame_discount_percent: {
          type: DataTypes.INTEGER,
          default: 0
      },
      frame_subtotal: {
          type: DataTypes.INTEGER
      },
      frame_total: {
          type: DataTypes.INTEGER
      }
    },{
        underscored: true
    });
  
  
  
    Frame.associate = function(models) {
  
      // associations to go here :)
      Frame.belongsTo(models.Order, { as: 'Order', foreignKey: 'frame_id' });
      Frame.hasOne(models.Drymount, { foreignKey: 'drymount_id' });
      Frame.hasMany(models.Extras,{ foreignKey: 'extras_id' });
      Frame.hasOne(models.Float,{ foreignKey: 'float_id' });
      Frame.hasOne(models.Flush,{ foreignKey: 'flush_id' });
      Frame.hasOne(models.Glazing,{ foreignKey: 'glazing_id' });
      Frame.hasOne(models.Mat,{ foreignKey: 'mat_id' });
      Frame.hasOne(models.Material,{ foreignKey: 'material_id' });
      Frame.hasOne(models.Spacer,{ foreignKey: 'spacer_id' });
      Frame.hasOne(models.Strainer,{ foreignKey: 'strainer_id' });
      
  
    };
  
    return Frame;
  };
