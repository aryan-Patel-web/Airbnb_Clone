if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
// console.log(process.env.SECRET) // Remove this after you've confirmed it is working

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// Error handling middleware
const wrapAsync = require("./utils/wrapAsyc.js");
const ExpressError = require("./utils/ExpressError.js");

// Validation schema using Joi ---- npm i joi 
const { listingSchema, reviewSchema } = require("./schema.js");

// Adding review section in show.ejs
const Review = require("./models/review.js");

// Flash for one-time messages ---- npm i connect-flash
const flash = require("connect-flash");

// Authentication middleware
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Routes
// const listingsRoutes = require('./routes/listings');


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user2.js");

// Session store ---- npm i express-session and connect-mongo
const session = require("express-session");
// const MongoStore = require("connect-mongo");

// app.use(listingRouter);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// Public folder for static CSS
app.use(express.static(path.join(__dirname, "public/css")));

// Database connection
// const dbUrl = process.env.ATLASDB_URL;

async function connectToDB() {
    try {
        // await mongoose.connect(dbUrl);
       await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
        console.log("Connected to DB--");
    } catch (err) {
        console.log("Database Connection Error: ", err);
    }
}
connectToDB();

// Session storage using MongoDB
// const store = MongoStore.create({
//     // mongoUrl: dbUrl,
//     crypto: {
//         secret: process.env.SECRET || "mysupersecretcode" // Use environment variable for production
//     },
//     touchAfter: 24 * 60 * 60 // Session updates only once every 24 hours
// });

// store.on("error", (err) => {
//     console.log("ERROR In Mongo Session Store", err);
// });

// Session options
const sessionOption = {
    // store,
    secret: process.env.SECRET || "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days expiration
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
};

// Session middleware
app.use(session(sessionOption));

// Flash middleware
app.use(flash());

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to make flash messages and current user globally available
app.use((req, res, next) => {
    res.locals.success = req.flash("success"); // Success flash messages
    res.locals.error = req.flash("error");     // Error flash messages
    res.locals.currUser = req.user || null; 
       // Safely assign req.user
    next();
});

// Test route to check if server is working
app.get("/", (req, res) => {
    res.send("Server is working!");
});


// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Error handling for unmatched routes
// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page not found!"));
// });

// Middleware for error handling
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Some error occurred" } = err;
    res.status(statusCode).render("error.ejs", { err });
});

// Server listening on port 3000
let port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
