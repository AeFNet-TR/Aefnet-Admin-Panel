const Oyun_Settings = require("../models/oyun_Setting")

module.exports.getMaintancePage = (req,res) => {

    Oyun_Settings.findOne({where: {ID: 1}})
    .then(oyun_setting => {
        res.render("admin/maintanceSettings",{oyun_setting});
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.postMaintancePage = (req,res) => {

    Oyun_Settings.findOne({where: {ID: 1}})
    .then(oyun_setting => {
        oyun_setting.Bakim_Mesaj = req.body.mesaj;
        oyun_setting.Bakim_Status = req.body.status;

        return oyun_setting.save();
    })
    .then(() => {
        res.redirect("/admin/maintance")
    })
    .catch(err => {
        console.log(err)
    })
}