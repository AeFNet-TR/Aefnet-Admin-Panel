const Sequelize = require('sequelize');
const sequelize = require("../utility/aefnet_LoginSystem");

const PlayerNick_Settings = sequelize.define('Server_Settings', {
    ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    SERVEROFF_MESAJ : {
        type: Sequelize.STRING,
        allowNull: false
    },
    SERVER_STATUS: {
        type: Sequelize.ENUM("Aktif","Pasif"),
        allowNull: false,
        defaultValue:"Pasif"
    }
})

module.exports = PlayerNick_Settings;