const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const signupSchema = mongoose.Schema({
    Name : {type:String, required:true},
    Email : {type:String, required:true},
    Password : {type:String, required:true},
    dateAdded : {type:String, default:Date.now()}
})

signupSchema.pre("save", function(next){
    bcrypt.hash(this.Password,  10, (err, hash)=>{
        this.Password = hash;
        next()
    })
})


const signupModel = mongoose.model("User_details", signupSchema)

module.exports = signupModel;