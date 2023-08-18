const { DataTypes } = require('sequelize');

const UserModel = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING(255),
            allowNull: false, 
            primaryKey: true,
        },
        userid: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    });
    return User;
};

module.exports = UserModel;
