const User = require("../models/user")

const Listing = require("../models/listing");
const Review = require("../models/review")


module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username }); // new user register here  // email and username value is assigned to model User 
        const registeredUser = await User.register(newUser, password)     // which is stored in user.js file in model directory

        // login  method is used when you sign up with new details then site will automatically logged

        req.login(registeredUser, (err) => {
            if (err) {
                return next();
            }
            req.flash("success", "Welcome to BookMyHotel")
            res.redirect("/listings")
        })
        // console.log(registeredUser);


    }
    catch (e) {
        req.flash("error", e.message)   // if username is already exist then this flash message will show 
        res.redirect("/signup");
    }
};


module.exports.rendersignupform=  (req, res) => {
    res.render("user/signup.ejs");
};


module.exports.renderloginform =  (req, res) => {
    res.render("user/login.ejs");
};



module.exports.login =  async (req, res) => {
    // passport.authenticate ek middleware hh jo login error me samme page pr redirect kr dega and Flash message show kr dega
    req.flash("success", "Welcome to BookMyHotel You are Logged in!");
let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};


module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
    })
    res.redirect("/login");
}
