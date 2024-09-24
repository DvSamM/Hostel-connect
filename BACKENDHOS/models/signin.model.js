const mongoose = require("mongoose")

const signinSchema = mongoose.Schema({
    Email : {type:String, required:true},
    Password : {type:String, required:true},
    dateAdded : {type:String, default:Date.now()}
})
const signinModel = mongoose.model("User_details", signinSchema)

module.exports = signinModel;