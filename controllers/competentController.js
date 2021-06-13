const Yetkililer = require("../models/yetkililer")

module.exports.getCompetentsPage = (req, res) => {

    Yetkililer.findAll()
    .then((competents) => {
        res.render("admin/competentList",{competents})
    })
    .catch((err) => {
        console.log(err)
    })
    
}

module.exports.getCompetentEditPage = (req, res) => {
    res.render("admin/edit/competentEdit")
}

module.exports.getCompetentAddPage = (req, res) => {
    res.render("admin/add/competentAdd")
}

module.exports.postCompetentAddPage = (req, res) => {
    Yetkililer.create({
        Username: req.body.username,
        Password: req.body.password,
        Role: req.body.role,
    })
    .then(() => {
        res.redirect("/admin/competents")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.getEditCompetentPage = (req, res) => {
    Yetkililer.findOne({where: {ID: req.params.id}})
    .then(competent => {
        res.render("admin/edit/competentEdit", {competent})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.postEditCompetentPage = (req, res) => {
    Yetkililer.findOne({where: {ID: req.params.id}})
    .then(competent => {
        competent.Username = req.body.username;
        competent.Password = req.body.password;
        competent.Role = req.body.role;

        return competent.save();
    })
    .then(() => {
        res.redirect("/admin/competents")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.deleteCompetentPage = (req, res) => {
    Yetkililer.findOne({where: {ID: req.params.id}})
    .then(competent => {

      return  competent.destroy();

    })
    .then(() => {
        res.redirect("/admin/competents")
    })
    .catch(err => {
        console.log(err)
    })
}