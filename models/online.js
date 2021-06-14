const Sequelize = require("sequelize");
const sequelize = require("../utility/aefnet_sayac");

const Online = sequelize.define("online", {
    online_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    online_user_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    online_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW    
    }
});

module.exports = Online;