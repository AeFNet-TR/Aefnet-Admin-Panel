const Sequelize = require('sequelize');
const sequelize = require("../utility/aefnet_LoginSystem");

const Oyun_Settings = sequelize.define('Oyun_Setting', {
    ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Bakim_Mesaj : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Bakim_Status: {
        type: Sequelize.ENUM("Aktif","Pasif"),
        allowNull: false,
        defaultValue:"Pasif"
    }
})

module.exports = Oyun_Settings;