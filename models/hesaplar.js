const Sequelize = require("sequelize");
const sequelize = require("../utility/aefnet_LoginSystem");

const Hesaplar = sequelize.define("Hesaplar", {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.NOW    
    },
    PlayerNick: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    GuvenlikSorusu: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    SoruYaniti: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    IPAdress: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 0
    },
    NickUpdateDate: {
        type: Sequelize.STRING
    },
    Status: {
        type: Sequelize.ENUM("Aktif","Pasif"),
        defaultValue: "Aktif"
    }
});
module.exports = Hesaplar;