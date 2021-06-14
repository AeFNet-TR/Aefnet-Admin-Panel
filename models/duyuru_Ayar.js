const Sequelize = require('sequelize');
const sequelize = require("../utility/aefnet_LoginSystem");

const Duyuru_Ayar = sequelize.define('Duyuru_Setting', {
    ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Duyuru_Mesaj : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Duyuru_Status: {
        type: Sequelize.ENUM("Aktif","Pasif"),
        allowNull: false,
        defaultValue:"Pasif"
    }
})

module.exports = Duyuru_Ayar;