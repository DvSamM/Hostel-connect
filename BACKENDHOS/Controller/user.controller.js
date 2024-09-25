const User = require("../models/user.model");
const bcrypt = require('bcryptjs');

const signup = (req, res) => {
    const { Name, Email, Password } = req.body;

    // Check if the user already exists
    User.findOne({ Email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ status: false, message: 'User already exists' });
            }

            // Hash the password
            return bcrypt.hash(Password, 10);
        })
        .then(hashedPassword => {
            // Create and save the new user
            const newUser = new User({ Name, Email, Password: hashedPassword });
            return newUser.save();
        })
        .then(() => {
            console.log("User saved successfully");
            res.status(201).json({ status: true, message: "User registered successfully" });
        })
        // .catch(err => {
        //     console.error("Error while saving user:", err);
        //     res.status(500).json({ status: false, message: "Error while saving user" });
        // });
};

module.exports = { signup };

const signin = async (req, res) => {
    console.log(req.body);
    
}





module.exports = {
    signup,
    signin,
};
