const Hesaplar = require("../models/hesaplar")
const Hwid_Ban = require("../models/hwid_Ban")

module.exports.getBanPage = (req, res) => {

    Hesaplar.findAll({ where: { Status: "Aktif" } })
        .then(hesaplar => {
            res.render("admin/ban", { hesaplar, messages: req.flash("danger") });
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.getAccountBanPage = (req, res) => {

    Hesaplar.findOne({ where: { PlayerNick: req.params.nick } })
        .then(account => {
            account.Status = "Pasif";

            return account.save();
        })
        .then(() => {
            res.redirect("/admin/ban/list")

        })
}

module.exports.getHwidBanPage = (req, res) => {

    Hwid_Ban.findOne({ where: { PLAYER_NICK: req.params.nick } })
        .then(account => {
            if (account === null) {
                req.flash("danger", "Kullanıcı Hwid Ban Sisteminde Bulunamadı.")
                res.redirect("/admin/ban/list")
            } else {
                Hesaplar.findOne({ where: { PlayerNick: req.params.nick } })
                    .then(hesap => {
                        hesap.Status = "Pasif";
                        hesap.save();
                    })
                if (account.Status === "Aktif") {
                    account.Status = "Pasif";
                    return account.save();
                } else {
                    req.flash("danger", "Bu Kullanıcıya Daha Önce Hwid Banı Atılmış.")
                    res.redirect("/admin/ban/list")
                }
            }
        })
        .then(() => {
            res.redirect("/admin/ban/list")
        })
}

module.exports.getBanListPage = (req, res) => {

    Hwid_Ban.findAll({ where: { Status: "Pasif" } })
        .then((hwid_bans) => {

            Hesaplar.findAll({ where: { Status: "Pasif" } })
                .then(account_bans => {
                    res.render("admin/banList", { hwid_bans, account_bans, messages: req.flash("danger") });
                })
        })
}

module.exports.getUnbanAccountPage = (req, res) => {
    Hesaplar.findOne({ where: { PlayerNick: req.params.nick } })
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

module.exports.getUnbanHwidPage = (req, res) => {
    Hwid_Ban.findOne({ where: { PLAYER_NICK: req.params.nick } })
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