const User = (sequelize, DataTypes) => {
    const model  = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
            },
            name: {
                type: DataTypes.STRING(10),
            },
            pw: {
                type: DataTypes.STRING(20),
            },
        },
        {
            tableName: 'user',
            freezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};

module.exports = User;