const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
// En Mayúsculas y singular // en minúsculas y singular
const User = sequelize.define('user', {
  
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false //en false para que el campo siempre sea requerido al usuario
    },

});

module.exports = User;