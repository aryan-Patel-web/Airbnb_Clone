const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsyc.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

// controller ko require
const listingController = require("../controllers/listings.js");

//---Multer-- library is used to handle---(when enctype is used) multipart / form--data like upload image 
// it ---parse--- the image to backend server
const multer = require('multer');

// require of cloudnary and storage from cloudconfig
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage }); // Destination folder for uploads


// INDEX ROUTE: Show all listings
router.get("/", wrapAsync(listingController.index)); 
// pass controller function to wrapasync to become more readable


// multer store image in folder after parsing of image
// router.post("/" , upload.single('listing[image]'), (req, res) => {
//     res.send(req.file); // test multer upload
// });


// NEW ROUTE: Form to create a new listing
router.get("/new", isLoggedIn, listingController.new);
 //// pass controller function to wrapasync to become more readable


// SHOW ROUTE: Show a specific listing
router.get("/:id", wrapAsync(listingController.show)); 
//// pass controller function to wrapasync to become more readable


// CREATE ROUTE: Create a new listing (with image upload via multer)
router.post("/", isLoggedIn, upload.single('listing[image]'), wrapAsync(listingController.create))


// EDIT ROUTE: Show form to edit a listing
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));
 // pass controller function to wrapasync to become more readable


// UPDATE ROUTE: Update a specific listing
router.put("/:id", isLoggedIn, isOwner,  upload.single('listing[image]'),wrapAsync(listingController.update));
 // pass controller function to wrapasync to become more readable


// DELETE ROUTE: Delete a listing
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.delete)); 
// pass controller function to wrapasync to become more readable


module.exports = router;
