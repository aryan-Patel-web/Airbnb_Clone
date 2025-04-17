// it stored all asynchronus function  in another function then export that function then we require in  listing.js to use
const express = require("express");
const router = express.Router();
// const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsyc.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
// const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing");
const { listingSchema } = require("../schema.js");
const { validate } = require("../schema.js")
const ExpressError = require("../utils/ExpressError.js")

/////////////
// to use mapbox geocoding copy from github
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');  // replace Tilesets with geocoding

// excess token from .env file
const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res, next) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}

module.exports.new = (req, res) => {
    res.render("./listings/new.ejs");
};


module.exports.show = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        }).populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
};


module.exports.create = async (req, res, next) => {

   let response = await geocodingClient.forwardGeocode({
        // query: 'New Delhi ,India',
        query: req.body.listing.location,
        limit: 1,
      })
        .send()
        
    // console.log(response.body.features[0].geometry);


    let url = req.file.path;
    let filename = req.file.filename;   // image se path or image nikal rhe uploaded imaGE ka
    // console.log(url , ".." , filename);

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = response.body.features[0].geometry;  // geocoding ko database me store kr rhe h h

    let savesListing = await newListing.save();
console.log(savesListing);

    req.flash("success", "Listing created successfully!");
    res.redirect(`/listings`);
};


module.exports.edit = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    // res.render("./listings/edit.ejs", { listing });


// edit of upload image then show blur image at the of editing
let  originalImageUrl= listing.image.url;
originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250")

res.render("listings/edit.ejs",{ listing ,  originalImageUrl})
};

module.exports.update = async (req, res, next) => {
    // const { error } = listingSchema.validate(req.body);
    // if (error) throw new ExpressError(error.details[0].message, 400);

    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    if (!updatedListing) {
        req.flash("error", "Failed to update listing.");
        return res.redirect(`/listings/${id}/edit`);
    }

    if (typeof req.file !=="undefined") {
        let url = req.file.path;                //
        let filename = req.file.filename;
        updatedListing.image = { url, filename };
        await updatedListing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};


module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};