const Hesaplar = require("../models/hesaplar")
const Hwid_Ban = require("../models/hwid_Ban")

module.exports.getUsersPage = (req,res) => {

    Hesaplar.findAll()
    .then((users) => {
        res.render("admin/userList",{users, messages: req.flash("success")});
    })
    .catch((err) => {
        console.error(err)
    })

}

module.exports.getUserEditPage = (req,res) => {

    Hesaplar.findOne({where: {ID: req.params.id}})
    .then((user) => {
        res.render("admin/edit/userEdit", {foundUser: user})
    })
    .catch(err => {
        console.error(err)
    })
}

module.exports.postUserEditPage = (req,res) => {

    Hesaplar.findOne({where: {ID: req.params.id}})
    .then((user) => {
        user.Email = req.body.email;
        user.Password = req.body.password;
        user.PlayerNick = req.body.playerNick;
        user.NickUpdateDate = req.body.nickUpdateDate;

        return user.save();
    })
    .then(() => {
        res.redirect("/admin/users")
    })
    .catch(err => {
        console.error(err)
    })

}

module.exports.getUserDeletePage = (req,res) => {

    Hesaplar.findOne({where: {PlayerNick: req.params.nick}})
    .then((user) => {
       return user.destroy();
    })
    .then(() => {

        Hwid_Ban.findOne({where: {PLAYER_NICK: req.params.nick}})
        .then(deletedUser => {

            if(deletedUser === null){

            } else {
                return deletedUser.destroy();
            }
        })
        .then(() => {
            req.flash("success","Kullanıcı başarıyla silindi.")
            res.redirect("/admin/users")
        })
        .catch(err => {
            console.log(err)
        })
        
    })
    .catch(err => {
        req.flash("danger","Kullanıcı silinemedi.")
        res.redirect("/admin/users")
    })

}

module.exports.getAddUserPage = (req,res) => {

    res.render("admin/add/userAdd")
}

module.exports.postAddUserPage = (req,res) => {

    Hesaplar.create({
        Email: req.body.email,
        Password: req.body.password,
        PlayerNick: req.body.player_nick,
        NickUpdateDate: req.body.nick_update_date
    })
    .then(() => {
        res.redirect("/admin/users")
    })
    .catch(err => {
        console.error(err)
    })

}