const Sequelize = require("sequelize");

const aefnet_sayac = new Sequelize("aefnet_sayac","aefnet_sayac","LdVhKf1=oZe3",{
    dialect: "mysql",
    host: "aefnet.com",
    define: { timestamps: false }
})

module.exports = aefnet_sayac;