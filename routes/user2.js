// all routes of user2.js written here

const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsyc = require("../utils/wrapAsyc.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


// controller ko require
const userController = require("../controllers/users.js");


router.get("/signup", userController.rendersignupform)
// signup routes


router.post("/signup", wrapAsyc(userController.signup));



//  login routes 
router.get("/login", userController.renderloginform)
// post 
router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login)

////////////////////////////////////////////////////////////////
///  Logout Routes here

router.get("/logout",userController.logout );


module.exports = router;

