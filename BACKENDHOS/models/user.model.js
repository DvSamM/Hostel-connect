const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const signupSchema = mongoose.Schema({
    Name : {type:String, required:true},
    Email : {type:String, required:true},
    Password : {type:String, required:true},
    dateAdded : {type:String, default:Date.now()}
})

const signinSchema = mongoose.Schema({
    Email : {type:String, required:true},
    Password : {type:String, required:true},
    dateAdded : {type:String, default:Date.now()}
})



const signupModel = mongoose.model("User_details", signupSchema)
const signinModel = mongoose.model("userSignin_details", signinSchema)

module.exports = signupModel, signinModel ;