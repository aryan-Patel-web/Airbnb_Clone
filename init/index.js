const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data.js");

main()
    .then(() => {
        console.log("Connected to DB--");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
    await Listing.deleteMany({});
initData.data =  initData.data.map((obj) => ({ ...obj, owner: "675d293cd6bb6e9f6476e3ec" }))  // for authorization this id make new array and add new owner option
    await Listing.insertMany(initData.data);
    console.log("data was initialize");                                          // 
}
initDB();


