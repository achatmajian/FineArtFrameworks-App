module.exports = function (sequelize, DataTypes) {
    var Frame = sequelize.define("frame", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
            allowNull: false
        },
        image_height: {
            type: DataTypes.INTEGER,
            allowNull: false
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
            allowNull: false
        },
        window_height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        face_width: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        frame_depth: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        frame_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        united_inch: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mounting_type: {
            type: DataTypes.STRING,
            allowNull: false
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
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        underscored: true,
        timestamps: true
    });


    Frame.associate = function (models) {

        // associations to go here :)
        Frame.belongsTo(models.order);

    };

    return Frame;
};
