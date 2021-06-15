const Sequelize = require("sequelize");

const aefnet_LoginSystem = new Sequelize("aefnet_AccountSystem","aefnet_AccountSystem","*x-#~%vr^H5P",{
    dialect: "mysql",
    host: "aefnet.com",
    define: { timestamps: false }
})

module.exports = aefnet_LoginSystem;