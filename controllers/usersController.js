const { Op } = require("sequelize");
const Hesaplar = require("../models/hesaplar")
const Hwid_Ban = require("../models/hwid_Ban")

module.exports.getUsersPage = (req, res) => {

    Hesaplar.findAll()
        .then((users) => {
            res.render("admin/userList", { users, messages: req.flash("success") });
        })
        .catch((err) => {
            console.error(err)
        })

}

module.exports.getUserEditPage = (req, res) => {

    Hesaplar.findOne({ where: { ID: req.params.id } })
        .then((user) => {
            res.render("admin/edit/userEdit", { foundUser: user, messages: req.flash("danger") })
        })
        .catch(err => {
            console.error(err)
        })
}

module.exports.postUserEditPage = (req, res) => {

    Hesaplar.findOne({where: {ID: req.params.id}})
    .then((user) => {
        user.Email = req.body.email;
        user.Password = req.body.password;
        user.PlayerNick = req.body.playerNick;
        user.NickUpdateDate = req.body.nickUpdateDate;
        user.GuvenlikSorusu = req.body.Guvenlik;
        user.SoruYaniti = req.body.Soru;

        return user.save();
    })
    .then(() => {
        res.redirect("/admin/users")
    })
    .catch(err => {
        console.error(err)
    })
}

module.exports.getUserDeletePage = (req, res) => {

    Hesaplar.findOne({ where: { PlayerNick: req.params.nick } })
        .then((user) => {
            return user.destroy();
        })
        .then(() => {

            Hwid_Ban.findOne({ where: { PLAYER_NICK: req.params.nick } })
                .then(deletedUser => {

                    if (deletedUser === null) {

                    } else {
                        return deletedUser.destroy();
                    }
                })
                .then(() => {
                    req.flash("success", "Kullanıcı Başarıyla Silindi.")
                    res.redirect("/admin/users")
                })
                .catch(err => {
                    console.log(err)
                })

        })
        .catch(err => {
            req.flash("danger", "Kullanıcı Silinemedi.")
            res.redirect("/admin/users")
        })

}

module.exports.getAddUserPage = (req, res) => {

    res.render("admin/add/userAdd", { messages: req.flash("danger") })
}

module.exports.postAddUserPage = (req, res) => {


    Hesaplar.findOne({
        where: {
            [Op.or]: [
                { PlayerNick: req.body.player_nick },
                { Email: req.body.email }
            ]
        }
    })
        .then(foundUser => {
            if (foundUser.Email === req.body.email && foundUser.PlayerNick === req.body.player_nick) {
                req.flash("danger", "Nick Veya Email Başkası Tarafından Kullanılıyor.")
                res.redirect("/admin/users/add")
            }
            else if (foundUser.PlayerNick === req.body.player_nick) {
                req.flash("danger", "Bu Nick Başkası Tarafından Kullanılıyor.")
                res.redirect("/admin/users/add")

            } else if (foundUser.Email === req.body.email) {
                req.flash("danger", "Bu Email Başkası Tarafından Kullanılıyor.")
                res.redirect("/admin/users/add")
            }
            else {
                Hesaplar.create({
                    Email: req.body.email,
                    Password: req.body.password,
                    PlayerNick: req.body.player_nick,
                    NickUpdateDate: req.body.nick_update_date,
                    GuvenlikSorusu: req.body.GuvenlikSorusu,
                    SoruYaniti: req.body.SoruYaniti

                })
                    .then(() => {
                        res.redirect("/admin/users")
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
        })
        .catch(err => {
            console.log(err)
            Hesaplar.create({
                Email: req.body.email,
                Password: req.body.password,
                PlayerNick: req.body.player_nick,
                NickUpdateDate: req.body.nick_update_date,
                GuvenlikSorusu: req.body.GuvenlikSorusu,
                SoruYaniti: req.body.SoruYaniti
            })
                .then(() => {
                    res.redirect("/admin/users")
                })
                .catch(err => {
                    console.error(err)
                })

        })

}