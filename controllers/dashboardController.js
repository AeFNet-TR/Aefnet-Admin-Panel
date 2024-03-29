const Sayac = require("../models/online")
const Hesaplar = require("../models/hesaplar")

module.exports.getDashboardPage = (req,res) => {
    Sayac.max('online_user_count')
    .then((onlineUsersCount) => {
        
        Sayac.findAll({
            order: [
                ['online_id',"DESC"]
            ] 
        })
        .then((nowOnlineUsers) => {
            Hesaplar.count({where: {status: "Pasif"}})
            .then(bannedUsers => {
                Hesaplar.count()
                .then(totalUsers => {
                    Sayac.count()
                    .then(onlineUsersCountControl => {
                        if(onlineUsersCountControl === 0) {
                            res.render("admin/dashboard",{onlineUsersCount: 0, nowOnlineUsers, bannedUsers, totalUsers})
                        } else {
                            res.render("admin/dashboard",{onlineUsersCount, nowOnlineUsers, bannedUsers, totalUsers})
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
                })
                .catch(err => {
                    console.log(err)
                })
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch((error) => {
            console.log(error)
        })

    })
    .catch((err) => {
        console.error(err)
    })
}
