module.exports = function (sequelize, DataTypes) {
    var Frame = sequelize.define("frame", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        temp_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        frame_quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        paper_width: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paper_height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image_width: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image_height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mat_size: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        float_size: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        window_width: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        window_height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        face_width: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        frame_depth: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        frame_size: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        united_inch: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mounting_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        drymount_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        drymount_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        drymount_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        drymount_cost_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        extras_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        extras_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        extras_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        float_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        float_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        float_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        flush_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        flush_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        flush_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        glazing_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        glazing_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        glazing_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        glazing_cost_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mat_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mat_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mat_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        material_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        material_finish: {
            type: DataTypes.STRING,
            allowNull: true
        },
        material_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        material_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        spacer_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        spacer_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        spacer_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        strainer_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        strainer_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        strainer_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        frame_extra_cost: {
            type: DataTypes.INTEGER,
            default: 0
        },
        frame_discount_percent: {
            type: DataTypes.INTEGER,
            default: 1
        },
        frame_subtotal: {
            type: DataTypes.INTEGER
        },
        frame_total: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        underscored: true,
        timestamps: true
    });

    Frame.associate = function (models) {
        Frame.belongsTo(models.order);
        Frame.belongsTo(models.temp);
    };

    return Frame;
};
