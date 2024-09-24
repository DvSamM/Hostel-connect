const signinModel = require("../models/signin.model")



const fetchAll = (req,res)=>{
    signinModel.find()
    .then((products)=>{
        console.log(products)
    })
    .catch((err)=>{
        console.log(err)
    })
}


const signin = (req, res) => {
    console.log(req.body);
    let form = new signinModel(req.body)
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
    signin,fetchAll,
}