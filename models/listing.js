const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string, required } = require("joi");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },

    image: {
       url:String,
       filename:String,
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"],
    },
    location: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    // for storing geocoding information in database 
    geometry: {
        type: {
            type: String, // "String" starts with a capital letter
            enum: ["Point"], // Enum must be "Point" for GeoJSON standards
            required: true,
        },
        coordinates: {
            type: [Number], // Correctly using "Number" (capitalized)
            required: true,
        },
    },
    
});

listingSchema.post("findOneAndDelete", async (listing) =>{   // to delete whole listing with comment and rating
    if (listing) {
        await Review.deleteMany({ _id : { $in :listing.reviews}})
    }
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;    




