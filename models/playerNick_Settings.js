const Sequelize = require('sequelize');
const sequelize = require("../utility/aefnet_LoginSystem");

const PlayerNick_Settings = sequelize.define('PlayerNick_Setting', {
    ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Nick_Mesaj : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Nick_Status: {
        type: Sequelize.ENUM("Aktif","Pasif"),
        allowNull: false,
        defaultValue:"Pasif"
    }
})

module.exports = PlayerNick_Settings;