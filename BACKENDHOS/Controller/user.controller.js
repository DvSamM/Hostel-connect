const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;

        // Check if the user already exists
        const existingUser = await userModel.findOne({ Email });
        if (existingUser) {
<<<<<<< HEAD
            console.log('User already exists');
            return res.status(400).send({ status: false, message: 'User already exists' });
        } else {
            // Hash the password
            const hashedPassword = await bcrypt.hash(Password, 10);
    
            // Create and save the new user
            const newUser = new User({ Name, Email, Password: hashedPassword });
    
            await newUser.save();
            console.log("User saved successfully");
            res.status(201).send({ status: true, message: "User registered successfully" });
        }

=======
            return res.status(400).json({ status: false, message: 'User already exists' });
        }else{
            // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create and save the new user
        const newUser = new userModel({ Name, Email, Password: hashedPassword });
        await newUser.save();
>>>>>>> 6add4a49214ae22abea923f9fca6446e1652a246

        console.log("User saved successfully");
        res.status(201).json({ status: true, message: "User registered successfully" });
        }

        
    } catch (err) {
        console.error("Error while saving user:", err);
        res.status(500).json({ status: false, message: "Error while saving user" });
    }
};
const signin = (req, res) => {
    const { Email, Password } = req.body;

    // Check if the user exists
    userModel.findOne({ Email })
        .then(user => {
            if (!user) {
                console.log('Invalid credentials: User not found');
                return res.status(400).json({ status: false, message: 'Invalid credentials' });
            }

            // Compare password with the hashed password
            return bcrypt.compare(Password, user.Password)
                .then(isMatch => {
                    if (!isMatch) {
                        console.log('Invalid credentials: Password mismatch');
                        return res.status(400).json({ status: false, message: 'Invalid credentials' });
                    }

                    // Generate a JWT token
                    const token = jwt.sign({ Email: user.Email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    console.log('Login successful for user:', Email);
                    return res.status(200).json({ status: true, message: 'Login successful', token });
                });
        })
        .catch(err => {
            console.error("Error during signin:", err);
            return res.status(500).json({ status: false, message: 'Error during signin' });
        });
};


module.exports = {
    signup,
    signin,
};
