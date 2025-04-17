const Listing = require("../models/listing");
const Review = require("../models/review")

module.exports.createpost = async(req,res) =>{  // pass validateReview as a Middleware here file-schema.js
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save(); // asynchronous fn
    await listing.save(); // existing document in database kuch bhi update krna h to hume ======= .save()    === ko call krna padega
    req.flash("success","New Review Created!");
    console.log("new review saved");
    res.redirect(`/listings/${listing._id}`);
};



module.exports.deleteReview = async (req, res) => {
    try {
        // console.log('DELETE request received for:', req.params);
        const { id, reviewId } = req.params;

        // Remove the review ID from the listing
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

        // Delete the review document itself
        await Review.findByIdAndDelete(reviewId);

        req.flash('success', 'Review deleted!');
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.error('Error deleting review:', error);
        req.flash('error', 'Failed to delete review.');
        res.redirect('back');
    }
};
