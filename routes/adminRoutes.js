const express = require('express')
const loggedIn = require('../middlewares/loggedIn')
const modController = require('../middlewares/modController')
const adminController = require('../middlewares/adminController')
const router = express.Router();

const dashboardController = require("../controllers/dashboardController")
const usersController = require("../controllers/usersController")
const gameSettingsController = require("../controllers/gameSettingsController")
const banController = require("../controllers/banController")
const competentController = require("../controllers/competentController.js")
const maintanceController = require("../controllers/maintanceController.js")

router.get("/dashboard",loggedIn,dashboardController.getDashboardPage);

router.get("/users",loggedIn,usersController.getUsersPage);
router.get("/users/add",loggedIn,modController,usersController.getAddUserPage);
router.post("/users/add",loggedIn,modController,usersController.postAddUserPage);

router.get("/settings", loggedIn,modController, gameSettingsController.gameSettingsController);
router.post("/settings", loggedIn,modController, gameSettingsController.updateAnnouncement);

router.get("/ban",  loggedIn,banController.getBanPage);
router.get("/ban/account/:nick",loggedIn, banController.getAccountBanPage);
router.get("/ban/hwid/:nick", loggedIn, banController.getHwidBanPage);

router.get("/ban/list", loggedIn, banController.getBanListPage);
router.get("/unban/hwid/:nick",  loggedIn,banController.getUnbanHwidPage)
router.get("/unban/account/:nick", loggedIn,banController.getUnbanAccountPage)

router.get("/competents", loggedIn,modController,adminController, competentController.getCompetentsPage);
router.get("/competent/edit/:id", loggedIn,modController,adminController, competentController.getEditCompetentPage);
router.post("/competent/edit/:id",loggedIn, modController,adminController, competentController.postEditCompetentPage);
router.get("/competent/delete/:id", loggedIn,modController,adminController, competentController.deleteCompetentPage);

router.get("/maintance", loggedIn, modController,maintanceController.getMaintancePage);
router.post("/maintance",  loggedIn,modController,maintanceController.postMaintancePage);


router.get("/edit/user/:id", loggedIn, usersController.getUserEditPage);
router.post("/edit/user/:id", loggedIn, usersController.postUserEditPage);

router.get("/edit/competent", loggedIn, competentController.getCompetentEditPage);



router.get("/add/competent",  loggedIn,competentController.getCompetentAddPage);
router.post("/add/competent", loggedIn, competentController.postCompetentAddPage);

router.get("/delete/user/:id", loggedIn,modController,usersController.getUserDeletePage);

module.exports = router;