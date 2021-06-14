module.exports = (req,res,next) => {
    if(req.session.user.Role === "Kurucu"){
        return next();
    } else {
        if(req.session.user.Role === "Admin"){
            return next();
        } else {

            if(req.session.user.Role === "Moderator"){
                res.redirect("/admin/404")
            }
        }

    }
}