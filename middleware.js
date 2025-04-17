// har jagah authenticated check aur bar bar likhna na pade isiliye file me common codition store kr liya
// 
// convert that condition in function soo every route like edit , new ,show ,create easily use just my calling middleware name

 // isAuthenticated() is a method of authorization when you can try to create listing then

 // if you login already then flash success message will appear otherwise error msg appear
const Listing = require("./models/listing");

const ExpressError = require("./utils/ExpressError.js");
const Joi = require('joi');
// validation schema ---- npm i joi 
const { listingSchema , reviewSchema } = require("./schema.js");



module.exports.isLoggedIn = (req, res, next) => {
//   console.log(req.path, "..", req.originalUrl);

  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;  // it is used to redirect user to the same page after login
    req.flash("error", "You must be logged in to create Listing");
    return res.redirect("/login");
  }
  next();
};

// middleware that use locals to store ---redirectUrl--- in session it can not deleted or reset by passport liabrary
module.exports.saveRedirectUrl = (req,res,next) =>{    //  that why we created this middleware then  pass this in --/login-- route
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next();
}


// user or public ko edit or delete na krne paye dosare owner ki listing ko
// create middleware for that we can use in edit and delete route

module.exports.isOwner = async(req,res,next) =>{
           // routes ko authorize krna nhi to koi postman se  request bhej skta hh
           let {id} = req.params;
           let listing = await Listing.findById(id);
           if(!listing.owner._id.equals(res.locals.currUser._id)) {
               req.flash("error", "You are not Owner of this listing");
             return  res.redirect(`/listings/${id}`);

           }
           next();
}

// joi validation
module.exports.validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    } else{
        next();
    }
}

module.exports.isReviewAuthor = async(req,res,next) =>{
  // routes ko authorize krna nhi to koi postman se  request bhej skta hh
  let { reviewId } = req.params;
  let review = await review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)) {
      req.flash("error", "You are not Author of this listing");
    return  res.redirect(`/listings/${id}`);

  }
  next();
}