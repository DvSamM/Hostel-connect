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
    res.send({form:form})
    .then(()=>{
        console.log("saved successfully");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports = {
    signup,fetchAll,
}