const Yetkililer = require("../models/yetkililer");

module.exports.getIndexPage = (req,res) => {
    res.render("index",{errors: req.flash("errors")});
}

module.exports.postIndexPage = (req,res) => {
    
    Yetkililer.findOne({where: {Username: req.body.username, Password: req.body.password}})
    .then(user => {
        if(user === null){
          req.flash("errors","Kullanıcı Adı Veya Şifre Yanlış.")
          res.redirect("/")
        } else {
            req.session.user = user;
            req.session.save();

            res.redirect("/admin/dashboard")
        }
    })


}