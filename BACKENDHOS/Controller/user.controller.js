const User = require("../models/user.model");
const bcrypt = require('bcryptjs');


const bcrypt = require('bcryptjs');
const signupModel = require('./path-to-your-signup-model'); // Update with your model path

const signup = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ status: false, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create and save the new user
        const newUser = new User({ Name, Email, password: hashedPassword });
        await newUser.save();

        console.log("User saved successfully");
        res.status(201).json({ status: true, message: "User registered successfully" });
    } catch (err) {
        console.error("Error while saving user:", err);
        res.status(500).json({ status: false, message: "Error while saving user" });
    }
};

const signin = async (req, res) => {
    console.log(req.body);
    
}





module.exports = {
    signup,
    signin,
};
