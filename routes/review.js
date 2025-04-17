const express = require("express");
// replace router in place of app
const router = express.Router({mergeParams : true}); 
// when you want to pass child route path information to parent route(common part) then use {mergearams : true}
                                                
                                                    
// const express = require("express");
// const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js"); 
const path = require("path");
const { render } = require("ejs");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// error handle middleware
const wrapAsync = require("../utils/wrapAsyc.js");
// express handling middleware
const ExpressError = require("../utils/ExpressError.js");   // double dot means want to go in parent directory

// const { required } = require("joi");
const Joi = require('joi');
// validation schema ---- npm i joi 
// const {listingSchema} = required("./schema.js");
const { listingSchema , reviewSchema } = require("../schema.js");  // double dot means want to go in parent directory

//  Adding review section in show.ejs
const Review = require("../models/review.js");
const { isLoggedIn,validateReview, isReviewAuthor } = require("../middleware.js");


// controller ko require
const reviewController = require("../controllers/reviews.js");

///
/////////// Reviws of Listing 
 // post route
 // remove common part of route path (file name--review.js directory-routes)then use that part in middleware file app.js
// common part ki mapping krna h ush varable pr jisme hmne require kiya hh review.js
 router.post("/" ,isLoggedIn, validateReview,wrapAsync(reviewController.createpost));


// to delete review and comment route
// remove common part of route path (file name--review.js directory-routes)then use that part in middleware file app.js
// common part ki mapping krna h ush varable pr jisme hmne require kiya hh review.js
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;




