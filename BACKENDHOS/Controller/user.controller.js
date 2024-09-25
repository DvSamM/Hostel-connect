const signupModel = require("../models/user.model")
const signinModel = require("../models/user.model")
const bcrypt = require('bcrypt');



const signup = async (req, res) => {
    try {
        const { Name, Email,  Password } = req.body;
        console.log(req.body);
        

        // Check if the user already exists
        const existingUser = await signupModel.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ status: false, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create and save the new user
        const newUser = new signupModel({ Name, Email, Password: hashedPassword });
        await newUser.save();

        console.log("User saved successfully");
        res.status(201).json({ status: true, message: "User registered successfully" });
    } catch (err) {
        console.error("Error while saving user:", err);
        res.status(500).json({ status: false, message: "Error while saving user" });
    }

    
}

const signin = (req, res) => {
       console.log(req.body);
       
}

module.exports = {
    signup,signin,
}