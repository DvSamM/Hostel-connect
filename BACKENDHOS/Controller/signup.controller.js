const signupModel = require("../models/signup.model")



const fetchAll = (req,res)=>{
    signupModel.find()
    .then((products)=>{
        console.log(products)
    })
    .catch((err)=>{
        console.log(err)
    })
}


const signup = (req, res) => {
    console.log(req.body);
    let form = new signupModel(req.body)
    form.save()

    .then(()=>{
        console.log("saved successfully");
        res.send({status: true, message: "saved successfully"})
        
    }).catch((err)=>{
        console.log(err);
        res.send({status: false, message: "error while saving"})
    })
}

module.exports = {
    signup,fetchAll,
}