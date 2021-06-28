const Sequelize = require('sequelize');
const sequelize = require("../utility/aefnet_LoginSystem");

const Hwid_Ban = sequelize.define('Hwid_Ban', {
    ID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Player_Nick: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PC_Parmak_izi: {
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