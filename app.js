const express = require('express')
const session = require('express-session')
var flash = require('connect-flash');
const app = express();

app.use(session({
    cookie: { maxAge: 1200000 },
    resave: false,
    secret: 'secretkey',
    saveUninitialized: true
}))

app.use(flash())

app.use((req,res,next) => {
    res.locals.user = req.session.user;
    next();
});

const aefnet_sayac = require('./utility/aefnet_sayac');
const aefnet_LoginSystem = require("./utility/aefnet_LoginSystem")

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

require("./models/oyun_Setting")
require('./models/playerNick_Settings')
require('./models/online')
require('./models/duyuru_Ayar')
require('./models/hesaplar')
require("./models/yetkililer")

const indexRoutes = require("./routes/indexRoutes")
const adminRoutes = require("./routes/adminRoutes");

aefnet_LoginSystem
.authenticate()
.then(() => {
    console.log("(aefnet_LoginSystem) Database Connection Success.")
})
.catch(err => {
    console.log("Database Connection Failed, "+err);
})

aefnet_sayac
.authenticate()
.then(() => {
    console.log("(aefnet_sayac) Database Connection Success.")
})
.catch(err => {
    console.log("Database Connection Failed, "+err);
})


app.use(indexRoutes)
app.use("/admin",adminRoutes)

aefnet_LoginSystem.sync();
aefnet_sayac.sync();

app.use((req, res, next) => {
    res.render("admin/notFound")
})

app.listen(5000 || process.env.PORT, (err) => {
    if(err) {
        console.log(err)
    }
    console.log("Server listening");
})
