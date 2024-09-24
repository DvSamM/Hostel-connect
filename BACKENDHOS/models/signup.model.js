const mongoose = require("mongoose")

const signupSchema = mongoose.Schema({
    Email : {type:String, required:true},
    Password : {type:String, required:true},
    dateAdded : {type:String, default:Date.now()}
})
const signupModel = mongoose.model("User_details", signupSchema)

module.exports = signupModel;