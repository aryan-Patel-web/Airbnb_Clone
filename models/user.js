
//model  for authentication 

// const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],    /// there is no username and password in this model of schema becoz passport library set by default
    
        unique: true,
        lowercase: true
    }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);


