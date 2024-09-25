const User = require("../models/user.model");
const bcrypt = require('bcryptjs');

const signup = (req, res) => {
    console.log(req.body);
    
    const { Name, Email, Password } = req.body;

    // Check if the user already exists
    User.findOne({ Email })
        .then(existingUser => {
            if (existingUser) {
                console.log('User already exists');
                return res.status(400).send({ status: false, message: 'User already exists' });
            }

            // Hash the password
            return bcrypt.hash(Password, 10);
        })
        .then(hashedPassword => {
            // Create a new user with the hashed password
            const user = new User({
                Name,
                Email,
                Password: hashedPassword,
            });

            // Save the user to the database
            return user.save();
        })
        .then(() => {
            console.log("User saved successfully");
            return res.status(201).send({ status: true, message: "User registered successfully" });
        })
        .catch(err => {
            console.error("Error during signup:", err);
            return res.status(500).send({ status: false, message: "Error during signup" });
        });
};



module.exports = {
    signup,
    signin,
};
