const Sequelize = require("sequelize");

const aefnet_LoginSystem = new Sequelize("aefnet_LoginSystem","aefnet_Login","PPht43qfs..",{
    dialect: "mysql",
    host: "aefnet.com"
})

module.exports = aefnet_LoginSystem;