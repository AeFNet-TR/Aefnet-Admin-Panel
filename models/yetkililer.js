const Sequelize = require("sequelize");
const sequelize = require("../utility/aefnet_LoginSystem");

const Yetkililer = sequelize.define("Yetkililer", {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.NOW    
    },
    Role: {
        type: Sequelize.ENUM("Kurucu","Admin","Moderator"),
        allowNull: false,
    }
});

module.exports = Yetkililer;