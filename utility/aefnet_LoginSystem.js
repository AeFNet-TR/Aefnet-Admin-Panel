const Sequelize = require("sequelize");

const aefnet_LoginSystem = new Sequelize("aefnet_LoginSystem","aefnet_Login","tTHrAuCDGL_5",{
    dialect: "mysql",
    host: "aefnet.com",
    define: { timestamps: false }
})

module.exports = aefnet_LoginSystem;