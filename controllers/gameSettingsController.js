const Duyuru_ayar = require("../models/duyuru_Ayar")
const PlayerNick_Settings = require("../models/playerNick_Settings")

module.exports.gameSettingsController = (req,res) => {

    Duyuru_ayar.findOne({where: {ID: 1}})
    .then(duyuru => {
        PlayerNick_Settings.findOne({where: {ID: 1}})
        .then(nick => {
            res.render("admin/gameSettings", {duyuru,nick});
        }) 
        .catch(err => {
            console.log(err)
        })
        
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports.updateAnnouncement = (req,res) => {

        PlayerNick_Settings.findOne({where: {ID: 1}})
        .then(nick => {
            nick.SERVEROFF_MESAJ = req.body.nick_mesaj;
            nick.SERVER_STATUS = req.body.nick_status;
    
            return nick.save();
        })
        .then(() => {
            res.redirect("/admin/settings")
        })
        .catch((err) => {
            console.log(err)
        })

        Duyuru_ayar.findOne({where: {ID: 1}})
        .then(duyuru => {
            duyuru.Duyuru_Mesaj = req.body.mesaj;
            duyuru.Duyuru_Status = req.body.status;
    
            return duyuru.save();
        })
        .then(() => {
            res.redirect("/admin/settings")
        })
        .catch((err) => {
            console.log(err)
        })
}  