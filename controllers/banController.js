const Hesaplar = require("../models/hesaplar")
const Hwid_Ban = require("../models/hwid_Ban")

module.exports.getBanPage = (req,res) => {

    Hesaplar.findAll({where: {Status: "Aktif"}})
    .then(hesaplar => {
        res.render("admin/ban",{hesaplar});
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.getAccountBanPage = (req,res) => {

    Hesaplar.findOne({where: {PlayerNick: req.params.nick}})
    .then(account => {
        account.Status = "Pasif";

        return account.save();
    })
    .then(() => {
        res.redirect("/admin/ban")        

    })
}

module.exports.getHwidBanPage = (req,res) => {

    Hwid_Ban.findOne({where: {PLAYER_NICK: req.params.nick}})
    .then(account => {

        account.Status = "Pasif";

        return account.save();
    })
    .then(() => {
        res.redirect("/admin/ban")        

    })

    Hesaplar.findOne({where: {PlayerNick: req.params.nick}})
    .then(account => {
        account.Status = "Pasif";

        account.save();
    })
}

module.exports.getBanListPage = (req,res) => {

    Hwid_Ban.findAll({where: {Status: "Pasif"}})
    .then((hwid_bans) => {

        Hesaplar.findAll({where: {Status: "Pasif"}})
        .then(account_bans => {
            res.render("admin/banList", {hwid_bans,account_bans});
        })
    })
}

module.exports.getUnbanAccountPage = (req,res) => {
    Hesaplar.findOne({where: {PlayerNick: req.params.nick}})
    .then(bannedUser => {
        bannedUser.Status = "Aktif"

        return bannedUser.save();
    })
    .then(() => {
        res.redirect("/admin/ban/list")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.getUnbanHwidPage = (req,res) => {
    Hwid_Ban.findOne({where: {PLAYER_NICK: req.params.nick}})
    .then(bannedUser => {
        bannedUser.Status = "Aktif"

        return bannedUser.save();
    })
    .then(() => {
        res.redirect("/admin/ban/list")
    })
    .catch(err => {
        console.log(err)
    })

}