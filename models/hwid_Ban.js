const Sequelize = require('sequelize');
const sequelize = require("../utility/aefnet_LoginSystem");

const Hwid_Ban = sequelize.define('Hwid_Ban', {
    ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    PLAYER_NICK : {
        type: Sequelize.STRING,
        allowNull: false
    },
    UUID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    SID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    WINSERIAL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CHIPSETSERIAL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    BIOSSERIAL:{
        type: Sequelize.STRING,
        allowNull: false
    },
    CPUADRES: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Status: {
        type: Sequelize.ENUM("Aktif","Pasif"),
        allowNull: false,
        defaultValue:"Aktif"
    }
})

module.exports = Hwid_Ban;